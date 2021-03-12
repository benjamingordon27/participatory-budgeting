import NavigationBar from '../NavigationBar/NavigationBar';

export function SiteLayout({ children }) {
  return (
    <div className="layout-container">
      <div className="layout__nav-bar">
        <NavigationBar />
      </div>
      <div className="layout__component">
        {children}
      </div>
    </div>
  );
}

export const getLayout = (pageComponent) => (
  <SiteLayout>
    {pageComponent}
  </SiteLayout>
);

export default SiteLayout;