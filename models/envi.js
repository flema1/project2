const db= require ('../db/config');

const Envi = {};



Envi.findAll = () => {
  //console.log ("here                       here ");
  return db.query('SELECT * FROM sight_log');
}



Envi.findById = (id) => {
  return db.oneOrNone(`
  SELECT * FROM sight_log
  WHERE id = $1
  `, [id]);
};


Envi.create = (envi) => {
   console.log ("    creating");
  return db.one(`
    INSERT INTO sight_log
    (keyOne, 
    keyTwo,
    keyThree,
    keyFour,
    keyFive,  
    keySix,
    keySeven,
    keyEight,
    keyNine,
    keyTen,
    keyEle,  
    keyTwelve
      )
    VALUES ($1, $2, $3, $4, $5 , $6 , $7 , $8 , $9 , $10 , $11 ,$12)
    RETURNING *
  `, [envi.keyOne,
      envi.keyTwo, 
      envi.keyThree,
      envi.keyFour,
      envi.keyFive,
      envi.keySix,
      envi.keySeven,
      envi.keyEight,
      envi.keyNine,
      envi.keyTen,
      envi.keyEle,
      envi.keyTwelve
      ]);
};


Envi.update = (envi, id) => {
  return db.one(`
    UPDATE sight_log SET
    keyOne = $1,
    keyTwo = $2,
    keyThree = $3,
    keyFour = $4,
    keyFive = $5,
    keySix = $6,
    keySeven = $7,
    keyEight = $8,
    keyNine = $9,
    keyTen = $10,
    keyEle = $11,
    keyTwelve = $12,

      user_id = $13
  

    WHERE id = $14
    RETURNING *
  `, [envi.keyone,
   envi.keytwo, 
   envi.keythree, 
   envi.keyfour, 
   envi.keyfive,
   envi.keysix,
   envi.keyseven, 
   envi.keyeight, 
   envi.keynine, 
   envi.keyten, 
   envi.keyele, 
   envi.keytwelve,  
   envi.user_id, id]);
};


Envi.destroy = (id) => {
  return db.none(`
    DELETE FROM sight_log
    WHERE id = $1
  `, [id])
}



module.exports = Envi;
