import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  window.gtag = window.gtag || function () {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
}
