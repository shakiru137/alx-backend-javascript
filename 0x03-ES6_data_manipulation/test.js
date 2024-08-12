/**
 * Function that returns an array of ids from a list of object
 * @author Shakiru Oluwasegun Yusuf <https://github.com/shakiru137>
 * @param {Array} list - This list of object to get the ids from
 * @returns {Array) - An array of ids
 */
export default function getIds(list) {
	const ids = [];

	if (Array.isArray(list)) {
		list.forEach((item) => {
		if (item.id !== undefined) {
			ids.push(item.id);
		}
	});
	}
	return ids;
}
