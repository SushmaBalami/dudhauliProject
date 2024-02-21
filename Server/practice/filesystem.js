import * as fs from 'node:fs/promises';
 await fs.writeFile("test.txt","Hello yesssssss");

 let contents= await fs.readFile( "test.txt","utf-8" );
 console.log(contents);
 try{
 let contents2= await fs.readFile( "test.txt1","utf-8" );
 console.log(contents2);
}
catch(err){
    console.log(err);
}
 console.log("exited");

 await fs.unlink("test.txt");
