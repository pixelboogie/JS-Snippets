 function capitals(word) {
     let indices = [];

     for(let i = 0; i<word.length; i++)
     {
        let letter = word[i];
        if(letter === letter.toUpperCase())
        {
            indices.push(i);
        }
     }

     return indices;

};

capitals('CodEWaRs');

