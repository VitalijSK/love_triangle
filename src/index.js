/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
    let count = 0;
    const visit = preferences.map(()=> false);
    preferences.forEach( (elem, i) => {
        if(!visit[i]) {
            const firstLove = preferences[elem - 1];
            const secondLove = preferences[firstLove - 1];
            if (secondLove == i + 1 && firstLove !== secondLove) {
                visit[elem - 1] = true;
                visit[firstLove - 1] = true;
                visit[secondLove - 1] = true;
                count++;
            }
        }
     });
     return count;
};
