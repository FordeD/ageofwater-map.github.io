/*!***************************************************
 * google-translate.js v1.0.6
 * https://Get-Web.Site/
 * author: Vitalii P.
 *****************************************************/


/* Вы можете перенести данный конфиг в head своего сайта, чтобы динамически конфигурировать значения при помощи данных из CMS */
/* You can transfer this config to the head of your site to dynamically configure values using data from the CMS */
const navLang = navigator.language || navigator.userLanguage;
const baseLang = navLang.toLowerCase().includes('ru') ? 'ru' : 'en';
const googleTranslateConfig = {
  /* Original language */
  lang: 'ru',

  /* Если хотите подписаться на событие "FinishTranslate" (Момент когда скрипт закончил перевод), расскоментируйте и добавьте любое проверочное слово на оригинальном языке */
  /* If you want to subscribe to the "FinishTranslate" event (The moment when the script finished translating), uncomment and add any test word in the original language */
  // testWord: "Язык",

  /* The language we translate into on the first visit*/
  /* Язык, на который переводим при первом посещении */
  langFirstVisit: baseLang,

  /* Если скрипт не работает или работает неправильно, раскомментируйте и укажите основной домен в свойстве domain */
  /* If the script does not work or does not work correctly, uncomment and specify the main domain in the domain property */
  domain: 'forded.github.io',
};

document.addEventListener('DOMContentLoaded', (event) => {
	if (baseLang === 'ru') return;
		/* Подключаем виджет google translate */
		/* Connecting the google translate widget */
		let script = document.createElement('script');
		script.src = `//translate.google.com/translate_a/element.js?cb=TranslateWidgetIsLoaded`;
		document.getElementsByTagName('head')[0].appendChild(script);
});

function TranslateWidgetIsLoaded() {
	TranslateInit(googleTranslateConfig);
}

function TranslateInit(config) {
	if (baseLang === 'ru') return;
	if (config.langFirstVisit && !Cookies.get("googtrans")) {
		/* Если установлен язык перевода для первого посещения и куки не назначены */
		/* If the translation language is installed for the first visit and cookies are not assigned */
		TranslateCookieHandler("/ru/" + config.langFirstVisit);
	}

	let code = TranslateGetCode(config);

	TranslateHtmlHandler(code);

	if (code === config.lang || code === 'ru') {
    /* Если язык по умолчанию, совпадает с языком на который переводим, то очищаем куки */
    /* If the default language is the same as the language we are translating into, then we clear the cookies */
    TranslateCookieHandler(null, config.domain);
  }

	if (config.testWord) TranslateMutationObserver(config.testWord, code == config.lang);


	/* Инициализируем виджет с языком по умолчанию */
	/* Initialize the widget with the default language */
	new google.translate.TranslateElement({
		pageLanguage: config.lang,
		multilanguagePage: true, // Your page contains content in more than one languages
	});

	/* Вешаем событие  клик на флаги */
	/* Assigning a handler to the flags */
	TranslateEventHandler("click", "[data-google-lang]", function (e) {
		TranslateCookieHandler(
			"/" + config.lang + "/" + e.getAttribute("data-google-lang"),
			config.domain
		);
		/* Перезагружаем страницу */
		/* Reloading the page */
		window.location.reload();
	});
}

function TranslateGetCode(config) {
	/* Если куки нет, то передаем дефолтный язык */
	/* If there are no cookies, then we pass the default language */
	let lang =
		Cookies.get("googtrans") != undefined && Cookies.get("googtrans") != "null"
			? Cookies.get("googtrans")
			: config.lang;
	return lang.match(/(?!^\/)[^\/]*$/gm)[0];
}

function TranslateCookieHandler(val, domain) {
	/* Записываем куки /язык_который_переводим/язык_на_который_переводим */
	/* Writing down cookies /language_for_translation/the_language_we_are_translating_into */
	Cookies.set("googtrans", val, {
		domain: document.domain,
		path: '/'
	});
	Cookies.set("googtrans", val, {
		domain: "." + document.domain,
		path: '/'
	});

	if (domain == "undefined") return;
	/* записываем куки для домена, если он назначен в конфиге */
	/* Writing down cookies for the domain, if it is assigned in the config */
	Cookies.set("googtrans", val, {
		domain: domain,
		path: '/'
	});

	Cookies.set("googtrans", val, {
		domain: "." + domain,
		path: '/'
	});
}

function TranslateEventHandler(event, selector, handler) {
	document.addEventListener(event, function (e) {
		let el = e.target.closest(selector);
		if (el) handler(el);
	});
}

function TranslateHtmlHandler(code) {
	/* Получаем язык на который переводим и производим необходимые манипуляции с DOM */
	/* We get the language to which we translate and produce the necessary manipulations with DOM */
	if (document.querySelector('[data-google-lang="' + code + '"]') !== null) {
		document
			.querySelector('[data-google-lang="' + code + '"]')
			.classList.add("language__img_active");
	}
}

function TranslateMutationObserver(word, isOrigin) {

	if (isOrigin) {
		document.dispatchEvent(new CustomEvent("FinishTranslate"));
	} else {

		/* Создаем скрытый блок в который добавляем тестовое слово на оригинальном языке. Это позволит нам отследить момент когда сайт будет переведен и вызвать событие "FinishTranslate"  */
		/* Creating a hidden block in which we add a test word in the original language. This will allow us to track the moment when the site is translated and trigger the "FinishTranslate" event  */

		let div = document.createElement('div');
		div.id = 'googleTranslateTestWord';
		div.innerHTML = word;
		div.style.display = 'none';
		document.body.prepend(div);

		let observer = new MutationObserver(() => {
			document.dispatchEvent(new CustomEvent("FinishTranslate"));
			observer.disconnect();
		});

		observer.observe(div, {
			childList: false,
			subtree: true,
			characterDataOldValue: true
		});
	}
}
