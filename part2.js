var fs = require('fs');
var readline = require('readline');
var csv2array=require('csv2array');

var rl = readline.createInterface({
  input: fs.createReadStream('myfile.csv')
});
//--------------------------------------------------till here the file is opened for reading

//------------------------------------------------------------------------------------------
rl.on('close',function() {
               // this segment denotes the eof being reached
});
//------------------------------------------------------------------------------------------

var lineno=0;
var data;
var PrimaryType,Arrest,Year;
var header1,header2,header3;

console.log("\n");

//------------------------------------reading of file line by line begins here

rl.on('line', function(line)
{
  lineno=lineno+1;

  if(lineno===1)    // this if construct is for the header section of the file
  {
    //code for the execution of the header part goes here.

    data=csv2array(line);
    var header=data[0];

    for(var i=0;i<header.length;i++)
    {
    if(header[i] == 'PrimaryType')
    {
    PrimaryType = i;
    header1=header[i];
    }
    }

    for(var i=0;i<header.length;i++)
    {
    if(header[i]=='Arrest')
    {
    Arrest = i;
    header2=header[i];
    }
    }

    for(var i=0;i<header.length;i++)
    {
    if(header[i]=='Year')
    {
    Year = i;
    header3=header[i];
    }
    }
  }
  else
  {
    //code for the traversal and manipulation of the rest of the file goes here.
    data=csv2array(line);
    var header=data[0];
    if(header[PrimaryType]==='ASSAULT')
    {

        //console.log(header[PrimaryType],header[Description],header[Year]);
        //console.log("\n");

    var obj={};


    //console.log(data);
    obj[header1]=header[PrimaryType];
    obj[header2]=header[Arrest];
    obj[header3]=header[Year];
    console.log(obj);
    var json_convert=JSON.stringify(obj);
    fs.appendFile('json_file2.json',json_convert);

}


  //   var writablestream=fs.createWriteStream('json_file1.json',{'flags':'w'},'utf8');
  //
  //   writablestream.write(json_convert,function(data123)
  // {
  //   console.log(data123);
  // });

  }

});

//------------------------------reading of file line by line ends here after eof is reached.
