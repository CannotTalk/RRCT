/**
 * 入力された配列の中からランダムな要素を選んで返す関数
 * @param {Array} arr - 入力する配列 
 * @returns 選ばれた要素
 */
function getRandomElement_(arr) {
    if (arr.length === 0) {
        throw new Error("配列が空です");
    }
    let randomIndex = Math.trunc(Math.random() * arr.length);
    return arr[randomIndex];
}

/**
 * 配列から重複を削除して一意な要素だけを返す関数
 * @param {Array} arr - 重複を消す配列 
 * @returns 重複が消された配列
 */
function removeDuplicates_(arr) {
    return [...new Set(arr)];
}

/**
 * 配列の重複した要素を返す関数
 * @param {Array} arr - 重複を探す配列 
 * @returns 重複している要素
 */
function findDuplicates_(arr) {
    const duplicates = [];
    const seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.push(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }

    return duplicates;
}