export default {
  /**
   * @function
   * @desc Savior for post index
   * @param {Map} list
   * @returns {{type: string, payload: Map}}
   */
  loadList: list => ({
    type: 'LOAD_LIST',
    payload: list,
  }),
  /**
   * @function
   * @param {Map} post
   * @returns {{type: string, payload: *}}
   */
  loadPost: post => ({
    type: 'LOAD_POST',
    payload: post,
  }),
};
