// @flow

import React from 'react';
import { connect } from 'react-redux';
import Route from 'react-router/Route';
import Switch from 'react-router/Switch';
import Cookies from 'js-cookie';
import { compose, lifecycle } from 'recompose';

import RepositoryRoute from '@ncigdc/routes/RepositoryRoute';
import ExploreRoute from '@ncigdc/routes/ExploreRoute';
import ProjectsRoute from '@ncigdc/routes/ProjectsRoute';
import AnnotationsRoute from '@ncigdc/routes/AnnotationsRoute';
import ProjectRoute from '@ncigdc/routes/ProjectRoute';
import FileRoute from '@ncigdc/routes/FileRoute';
import CaseRoute from '@ncigdc/routes/CaseRoute';
import AnnotationRoute from '@ncigdc/routes/AnnotationRoute';
import CartRoute from '@ncigdc/routes/CartRoute';
import HomeRoute from '@ncigdc/routes/HomeRoute';
import GeneRoute from '@ncigdc/routes/GeneRoute';
import SSMRoute from '@ncigdc/routes/SSMRoute';
import SmartSearchRoute from '@ncigdc/routes/SmartSearchRoute';

import Head from '@ncigdc/components/Head';
import Header from '@ncigdc/components/Header';
import Footer from '@ncigdc/components/Footer';
import NotificationContainer from '@ncigdc/components/NotificationContainer';
import RelayLoadingContainer from '@ncigdc/components/RelayLoadingContainer';
import ProgressContainer from '@ncigdc/components/ProgressContainer';
import ModalContainer from '@ncigdc/components/ModalContainer';
import NotFound from '@ncigdc/components/NotFound';

import withRouter from '@ncigdc/utils/withRouter';
import { GlobalTooltip } from '@ncigdc/uikit/Tooltip';

import styled from '@ncigdc/theme/styled';
import { setModal } from '@ncigdc/dux/modal';
import FirstTimeModal from '@ncigdc/components/Modals/FirstTimeModal';

import * as ModernComponents from '@ncigdc/modern_components';

const SkipLink = styled.a({
  position: 'absolute',
  left: '-999px',
  backgroundColor: '#fff',
  zIndex: 1000,
});

const FIRST_TIME_KEY = 'NCI-Warning';

const enhance = compose(
  connect(store => ({ notifications: store.bannerNotification })),
  withRouter,
  lifecycle({
    componentDidMount(): void {
      if (!Cookies.get(FIRST_TIME_KEY)) {
        this.props.dispatch(setModal(<FirstTimeModal />));
        Cookies.set(FIRST_TIME_KEY, true);
      }

      let lastPathname = this.props.location.pathname;
      this.removeListen = this.props.listen(location => {
        if (location.pathname !== lastPathname) {
          window.scrollTo(0, 0);
          lastPathname = location.pathname;
        }
      });
    },
    componentWillUnmount(): void {
      this.removeListen();
    },
  }),
);
const PortalContainer = ({
  notifications,
}: {
  notifications: Array<{ dismissed: string }>,
}) =>
  <div style={{ position: 'relative', minHeight: '100vh', minWidth: 1024 }}>
    <SkipLink href="#skip">Skip to Main Content</SkipLink>
    <ProgressContainer />
    <Header />
    <div
      id="skip"
      style={{
        paddingTop: `calc(51px + ${notifications.filter(n => !n.dismissed)
          .length * 40}px)`,
        paddingBottom: '120px',
        transition: 'padding 0.25s ease',
      }}
    >
      <Route
        children={p => <Head title={p.location.pathname.split('/')[1]} />}
      />
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/cart" component={CartRoute} />
        <Route exact path="/repository" component={RepositoryRoute} />
        <Route exact path="/exploration" component={ExploreRoute} />
        <Route exact path="/projects" component={ProjectsRoute} />
        <Route exact path="/annotations" component={AnnotationsRoute} />
        <Route exact path="/query" component={SmartSearchRoute} />
        {ProjectRoute}
        <Route path="/files/:id" component={FileRoute} />
        <Route path="/cases/:id" component={CaseRoute} />
        <Route path="/annotations/:id" component={AnnotationRoute} />
        {GeneRoute}
        {SSMRoute}
        <Route
          path="/components/:component"
          component={({ match, ...props }) => {
            const Component = ModernComponents[match.params.component];
            return Component
              ? <Component />
              : <h1>No matching component found.</h1>;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />

    <RelayLoadingContainer />
    <NotificationContainer />
    <ModalContainer />
    <GlobalTooltip />
  </div>;

export default enhance(PortalContainer);
