const integrations = {};

function createSideIntegrationBlock(tag, url, openButtonImage, title, isHidden = false, openOnSide = false) {
  initInterface(tag, url, openButtonImage, title, isHidden, openOnSide);
  integrations[tag].actions = initInteractive(tag);
}

function initInteractive(tag) {
  const openPanel = () => {
    if (integrations[tag].isHidden) {
      if (!document.querySelector(`#main-${tag}-panel`).classList.contains('active')) {
        document.querySelector(`#main-${tag}-panel`).classList.add('active');
      }
      if (
        !document
          .querySelector(`#close-${tag}-button`)
          .classList.contains('close-integration-button-active')
      ) {
        document
          .querySelector(`#close-${tag}-button`)
          .classList.add('close-integration-button-active');
      }
    } else {
      document.querySelector(`#open-${tag}-panel`).click();
    }
  }
  openPanel.bind(this);
  const closePanel = () => {
    document.querySelector(`#close-${tag}-panel`).click();
  }
  closePanel.bind(this);

  const openIframeUrl = (url) => {
    if (!integrations[tag].iframe) return false;
    integrations[tag].iframe.src = url;
  }
  openIframeUrl.bind(this);

  const setContent = (html) => {
    if (!integrations[tag].content) return false;
    integrations[tag].content.innerHTML = html;
  }
  setContent.bind(this);

  return {
    openPanel,
    closePanel,
    openIframeUrl,
    setContent,
  };
}

function initInterface(tag, url, openButtonImage, title, isHidden = false, openOnSide = false) {
  const body = document.querySelector('body');
  const mapButtonsPanel = document.querySelector('.leaflet-top.leaflet-left');
  const openPanelButton = document.createElement('button');
  if (title) {
    openPanelButton.title = title;
  }
  openPanelButton.id = `open-${tag}-panel`;
  openPanelButton.classList.add('open-integration-button');
  openPanelButton.classList.add('leaflet-control');
  openPanelButton.style =
    'background-color: transparent; width: 26px; height: 26px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;';

  if (openButtonImage) {
    const buttonImage = document.createElement('img');
    buttonImage.src = openButtonImage;
    buttonImage.classList.add('open-integration-button-image');
    openPanelButton.appendChild(buttonImage);
  }
  if (!isHidden) {
    mapButtonsPanel.appendChild(openPanelButton);
  }

  const panelBlock = document.createElement('div');
  panelBlock.id = `main-${tag}-panel`;
  panelBlock.classList.add(`main-integration-panel`);
  if (openOnSide) {
    panelBlock.classList.add(`side-integration-panel`);
  }
  const closePanelButton = document.createElement('button');
  closePanelButton.id = `close-${tag}-button`;
  closePanelButton.classList.add('close-integration-button');
  closePanelButton.innerHTML = '❌';
  panelBlock.appendChild(closePanelButton);

  let panelIframe;
  let panelContent;
  if (url) {
    panelIframe = document.createElement('iframe');
    panelIframe.id = `iframe-${tag}-object`;
    panelIframe.classList.add('iframe-integration-block');
    panelIframe.src = url;
    panelIframe.frameborder = 0;
    panelIframe.frameBorder = 0;
    panelIframe.scolling = 'auto';
    panelBlock.appendChild(panelIframe);
  } else {
    panelContent = document.createElement('div');
    panelContent.id = `content-${tag}-object`;
    panelContent.classList.add('content-integration-block');
    panelBlock.appendChild(panelContent);
  }

  body.appendChild(panelBlock);

  if (!isHidden) {
    document.querySelector(`#open-${tag}-panel`).addEventListener('click', () => {
      if (!document.querySelector(`#main-${tag}-panel`).classList.contains('active')) {
        document.querySelector(`#main-${tag}-panel`).classList.add('active');
      }
      if (
        !document
          .querySelector(`#close-${tag}-button`)
          .classList.contains('close-integration-button-active')
      ) {
        document
          .querySelector(`#close-${tag}-button`)
          .classList.add('close-integration-button-active');
      }
    });
  }

  document.querySelector(`#close-${tag}-button`).addEventListener('click', () => {
    if (document.querySelector(`#main-${tag}-panel`).classList.contains('active')) {
      document.querySelector(`#main-${tag}-panel`).classList.remove('active');
    }
    if (
      document
        .querySelector(`#close-${tag}-button`)
        .classList.contains('close-integration-button-active')
    ) {
      document
        .querySelector(`#close-${tag}-button`)
        .classList.remove('close-integration-button-active');
    }
  });

  const integrationObject = {
    openPanelButton,
    closePanelButton,
    panelBlock,
    iframe: panelIframe,
    content: panelContent,
    actions: {},
    isHidden,
  };

  integrations[tag] = integrationObject;
}
