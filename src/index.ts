interface Config {

}

interface CellConfig {

}

export function _getHTMLElement(selector: string) {
  let el: Element = document.querySelector(selector);
  if (!el) {
    throw new Error(`Element (${selector}) not found`);
  }
  return el;
}

export default function (el: Element | string, config?: Config) : (cells?: Array<number | CellConfig>) => void {
  let element : Element = typeof el === 'string' ? _getHTMLElement(el) : el;
  return (cells?: Array<number | CellConfig>) => {
    element.innerHTML = 'hello!';
  }
}
