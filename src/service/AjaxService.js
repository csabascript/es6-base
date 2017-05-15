'use strict';

export default class AjaxService {

  /**
   *
   * @param url {String}
   * @returns {Promise}
   */
  get(url) {
    const method = 'GET';

    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();

      xhr.open(method, url);

      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.statusText);
        }
      };

      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
  }
}
