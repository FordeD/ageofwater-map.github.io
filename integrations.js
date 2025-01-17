const integrations = {};

function createSideIntegrationBlock(tag, url, openButtonImage, title) {
  initInterface(tag, url, openButtonImage, title);
  integrations[tag].actions = initInteractive(tag);
}

function initInteractive(tag) {
  const openPanel = () => {
    document.querySelector(`#open-${tag}-panel`).click()
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

  return {
    openPanel,
    closePanel,
    openIframeUrl,
  };
}

function initInterface(tag, url, openButtonImage, title) {
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
  mapButtonsPanel.appendChild(openPanelButton);
  // body.appendChild(openPanelButton);

  const panelBlock = document.createElement('div');
  panelBlock.id = `main-${tag}-panel`;
  panelBlock.classList.add(`main-integration-panel`);
  const closePanelButton = document.createElement('button');
  closePanelButton.id = `close-${tag}-button`;
  closePanelButton.classList.add('close-integration-button');
  closePanelButton.innerHTML = '❌';
  panelBlock.appendChild(closePanelButton);

  let panelIframe;
    if (url) {
      panelIframe = document.createElement('iframe');
      panelIframe.id = `iframe-${tag}-object`;
      panelIframe.classList.add('iframe-integration-block');
      panelIframe.src = url;
      panelIframe.frameborder = 0;
      panelIframe.frameBorder = 0;
      panelIframe.scolling = 'auto';
      panelBlock.appendChild(panelIframe);
    }

  body.appendChild(panelBlock);

  if (tag === 'news') {
    const vkGroup = document.createElement('div');
    vkGroup.id = `vk_groups`;
    vkGroup.classList.add('iframe-integration-block');
    panelBlock.appendChild(vkGroup);
    VK.Widgets.Group(
      'vk_groups',
      { mode: 4, wide: 1, color1: 'FFFFFF', color2: '000000', color3: '5181B8' },
      197716556,
    );
  }

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
    actions: {},
  };

  integrations[tag] = integrationObject;
}
