/**
 * Created by xaleth on 7/11/2016.
 */


function bubble(sortable) {
    for(let i = 0; i < sortable.length; i++){
        for(let j = 0; j < sortable.length - 1; j++){
            if(sortable[i] < sortable[j]){
                swap(sortable, i , j);
            }
        }
    }
}

function swap(sort, i, j){
        let tmp = sort[i];
        sort[i] = sort[j];
        sort[j] = tmp;
}


