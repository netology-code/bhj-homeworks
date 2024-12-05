let tabs = Array.from(document.getElementsByClassName("tab"));
let tabContent = document.getElementsByClassName("tab__content");

function changeActiveElements() {
	for (const tab of tabs) {
		tab.className = "tab";
	}

	for (const cntnt of tabContent) {
		cntnt.className = "tab__content";
	}

	let index = tabs.indexOf(this)

	tabs[index].className = "tab tab_active";
	tabContent[index].className = "tab__content tab__content_active";
}

for (const tbs of tabs) {
	tbs.onclick = changeActiveElements;
}