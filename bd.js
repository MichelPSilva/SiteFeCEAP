const sqlite3 = require("sqlite3");
const bd = new sqlite3.Database("./SiteFeCEAP.bd");

// bd.serialize(function(){
//     // //Criar Tabela
//     // bd.run(` 
//     //     CREATE TABLE IF NOT EXISTS projetos(
//     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
//     //         img TEXT,
//     //         title TEXT,
//     //         category TEXT,
//     //         description TEXT,
//     //         url TEXT);
//     // `);
    
    //Inserir Dados
    // const query = `
    // INSERT INTO projetos(
    //     img,
    //     title,
    //     category,
    //     description,
    //     url
    // ) VALUES (?,?,?,?,?)` ;
    // const values = ["https://cdn-icons-png.flaticon.com/512/4897/4897032.png","O advento de battle royalle, um estudo sobre Free Fire","Administração","Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquid repellat tempora illum unde hic dolorum doloribus ipsum quibusdam","#"];
    // bd.run(query, values, function(err){
    //     if(err) return console.log(err);        
    //     console.log("Dado armazenado com sucesso!");
    // });

//     // //Cosultar Dados
//     // bd.all("SELECT * FROM projetos", function(err, rows){
//     //     if(err) return console.log(err)
//     //     console.log(rows)
//     // })
    
//     // //Deletar Dados
//     // bd.run("DELETE FROM projetos WHERE id=?", [8], function(err){
//     //     if(err) return console.log(err);
//     //     console.log("Deletei", this)
//     // })

//     // //O Famoso CRUD
// })


module.exports = bd;