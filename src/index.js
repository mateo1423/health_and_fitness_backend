import express from 'express';
import cors from 'cors';
import connect from './db.js';
import mongo from 'mongodb';

import dotenv from "dotenv"
dotenv.config();

const app = express()
const port  = process.env.PORT;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(express.json())


//arms

app.get('/arms/athome/beginner', async (req, res) => {
  let db = await connect();
  
   let cursor = await db.collection('arms').find( { exercize_type: "At_home", exerciye_dificulty:"Beginner" })
  let result = await cursor.toArray()
 
  res.json(result)
 
  })


  app.get('/arms/athome/intermidiate', async (req, res) => {
  let db = await connect();
 
  let cursor = await db.collection('arms').find( { exercize_type: "At_home", exerciye_dificulty:"Intermidiate" })
  let result = await cursor.toArray()
 
  res.json(result)
 
  })

  app.get('/arms/athome/Advanced', async (req, res) => {
    let db = await connect();
   
    let cursor = await db.collection('arms').find( { exercize_type: "At_home", exerciye_dificulty:"Advanced" })
    let result = await cursor.toArray()
   
    res.json(result)
   
    })


  app.get('/arms/ingym/beginner', async (req, res) => {
  let db = await connect();
 
  let cursor = await db.collection('arms').find( { exercize_type: "In-gym", exerciye_dificulty:"Beginner" })
  let result = await cursor.toArray()
 
  res.json(result)
 
  })

    app.get('/arms/ingym/intermidiate', async (req, res) => {
  let db = await connect();
 
  let cursor = await db.collection('arms').find( { exercize_type: "In-gym", exerciye_dificulty:"Intermidiate" })
  let result = await cursor.toArray()
 
  res.json(result)
 
  })


     app.get('/arms/ingym/advanced', async (req, res) => {
  let db = await connect();
 
  let cursor = await db.collection('arms').find( { exercize_type: "In-gym", exerciye_dificulty:"Advanced" })
  let result = await cursor.toArray()
 
  res.json(result)
 
  })


                //abs


                app.get('/abs/athome/beginner', async (req, res) => {
                  let db = await connect();
                  
                  let cursor = await db.collection('abs').find( { exercize_type: "At_home", exerciye_dificulty:"Beginner" })
                  let result = await cursor.toArray()
                
                  res.json(result)
                
                  })

                
                app.get('/abs/athome/intermidiate', async (req, res) => {
                  let db = await connect();
                
                  let cursor = await db.collection('abs').find( { exercize_type: "At_home", exerciye_dificulty:"Intermidiate" })
                  let result = await cursor.toArray()
                
                  res.json(result)
                
                  })
                
                  app.get('/abs/athome/Advanced', async (req, res) => {
                    let db = await connect();
                  
                    let cursor = await db.collection('abs').find( { exercize_type: "At_home", exerciye_dificulty:"Advanced" })
                    let result = await cursor.toArray()
                  
                    res.json(result)
                  
                    })
                
                
                  app.get('/abs/ingym/beginner', async (req, res) => {
                  let db = await connect();
                
                  let cursor = await db.collection('abs').find( { exercize_type: "In-gym", exerciye_dificulty:"Beginner" })
                  let result = await cursor.toArray()
                
                  res.json(result)
                
                  })
                
                    app.get('/abs/ingym/intermidiate', async (req, res) => {
                  let db = await connect();
                
                  let cursor = await db.collection('abs').find( { exercize_type: "In-gym", exerciye_dificulty:"Intermidiate" })
                  let result = await cursor.toArray()
                
                  res.json(result)
                
                  })
                
                
                    app.get('/abs/ingym/advanced', async (req, res) => {
                  let db = await connect();
                
                  let cursor = await db.collection('abs').find( { exercize_type: "In-gym", exerciye_dificulty:"Advanced" })
                  let result = await cursor.toArray()
                
                  res.json(result)
                
                  })
  





                                        //legs

                                        app.get('/legs/athome/beginner', async (req, res) => {
                                          let db = await connect();



                                          let cursor = await db.collection('legs').find( { exercize_type: "At_home", exerciye_dificulty:"Beginner" })
                                          let result = await cursor.toArray()
                                        
                                          res.json(result)
                                        
                                          })
                                        
                                        

                                          app.get('/legs/athome/intermidiate', async (req, res) => {
                                          let db = await connect();
                                        
                                          let cursor = await db.collection('legs').find( { exercize_type: "At_home", exerciye_dificulty:"Intermidiate" })
                                          let result = await cursor.toArray()
                                        
                                          res.json(result)
                                        
                                          })

                                          app.get('/legs/athome/Advanced', async (req, res) => {
                                            let db = await connect();
                                          
                                            let cursor = await db.collection('legs').find( { exercize_type: "At_home", exerciye_dificulty:"Advanced" })
                                            let result = await cursor.toArray()
                                          
                                            res.json(result)
                                          
                                            })


                                          app.get('/legs/ingym/beginner', async (req, res) => {
                                          let db = await connect();
                                        
                                          let cursor = await db.collection('legs').find( { exercize_type: "In-gym", exerciye_dificulty:"Beginner" })
                                          let result = await cursor.toArray()
                                        
                                          res.json(result)
                                        
                                          })

                                            app.get('/legs/ingym/intermidiate', async (req, res) => {
                                          let db = await connect();
                                        
                                          let cursor = await db.collection('legs').find( { exercize_type: "In-gym", exerciye_dificulty:"Intermidiate" })
                                          let result = await cursor.toArray()
                                        
                                          res.json(result)
                                        
                                          })


                                            app.get('/legs/ingym/advanced', async (req, res) => {
                                          let db = await connect();
                                        
                                          let cursor = await db.collection('legs').find( { exercize_type: "In-gym", exerciye_dificulty:"Advanced" })
                                          let result = await cursor.toArray()
                                        
                                          res.json(result)
                                        
                                          })





                                                                //back

                                                                app.get('/back/athome/beginner', async (req, res) => {
                                                                  let db = await connect();



                                                                  let cursor = await db.collection('back').find( { exercize_type: "At_home", exerciye_dificulty:"Beginner" })
                                                                  let result = await cursor.toArray()
                                                                
                                                                  res.json(result)
                                                                
                                                                  })



                                                                  app.get('/back/athome/intermidiate', async (req, res) => {
                                                                  let db = await connect();
                                                                
                                                                  let cursor = await db.collection('back').find( { exercize_type: "At_home", exerciye_dificulty:"Intermidiate" })
                                                                  let result = await cursor.toArray()
                                                                
                                                                  res.json(result)
                                                                
                                                                  })

                                                                  app.get('/back/athome/Advanced', async (req, res) => {
                                                                    let db = await connect();
                                                                  
                                                                    let cursor = await db.collection('back').find( { exercize_type: "At_home", exerciye_dificulty:"Advanced" })
                                                                    let result = await cursor.toArray()
                                                                  
                                                                    res.json(result)
                                                                  
                                                                    })


                                                                  app.get('/back/ingym/beginner', async (req, res) => {
                                                                  let db = await connect();
                                                                
                                                                  let cursor = await db.collection('back').find( { exercize_type: "In-gym", exerciye_dificulty:"Beginner" })
                                                                  let result = await cursor.toArray()
                                                                
                                                                  res.json(result)
                                                                
                                                                  })

                                                                    app.get('/back/ingym/intermidiate', async (req, res) => {
                                                                  let db = await connect();
                                                                
                                                                  let cursor = await db.collection('back').find( { exercize_type: "In-gym", exerciye_dificulty:"Intermidiate" })
                                                                  let result = await cursor.toArray()
                                                                
                                                                  res.json(result)
                                                                
                                                                  })


                                                                    app.get('/back/ingym/advanced', async (req, res) => {
                                                                  let db = await connect();
                                                                
                                                                  let cursor = await db.collection('back').find( { exercize_type: "In-gym", exerciye_dificulty:"Advanced" })
                                                                  let result = await cursor.toArray()
                                                                
                                                                  res.json(result)
                                                                
                                                                  })




                                                                              //chest

                                                                              app.get('/chest/athome/beginner', async (req, res) => {
                                                                                let db = await connect();



                                                                                let cursor = await db.collection('chest').find( { exercize_type: "At_home", exerciye_dificulty:"Beginner" })
                                                                                let result = await cursor.toArray()
                                                                              
                                                                                res.json(result)
                                                                              
                                                                                })



                                                                                app.get('/chest/athome/intermidiate', async (req, res) => {
                                                                                let db = await connect();
                                                                              
                                                                                let cursor = await db.collection('chest').find( { exercize_type: "At_home", exerciye_dificulty:"Intermidiate" })
                                                                                let result = await cursor.toArray()
                                                                              
                                                                                res.json(result)
                                                                              
                                                                                })

                                                                                app.get('/chest/athome/Advanced', async (req, res) => {
                                                                                  let db = await connect();
                                                                                
                                                                                  let cursor = await db.collection('chest').find( { exercize_type: "At_home", exerciye_dificulty:"Advanced" })
                                                                                  let result = await cursor.toArray()
                                                                                
                                                                                  res.json(result)
                                                                                
                                                                                  })


                                                                                app.get('/chest/ingym/beginner', async (req, res) => {
                                                                                let db = await connect();
                                                                              
                                                                                let cursor = await db.collection('chest').find( { exercize_type: "In-gym", exerciye_dificulty:"Beginner" })
                                                                                let result = await cursor.toArray()
                                                                              
                                                                                res.json(result)
                                                                              
                                                                                })

                                                                                  app.get('/chest/ingym/intermidiate', async (req, res) => {
                                                                                let db = await connect();
                                                                              
                                                                                let cursor = await db.collection('chest').find( { exercize_type: "In-gym", exerciye_dificulty:"Intermidiate" })
                                                                                let result = await cursor.toArray()
                                                                              
                                                                                res.json(result)
                                                                              
                                                                                })


                                                                                  app.get('/chest/ingym/advanced', async (req, res) => {
                                                                                let db = await connect();
                                                                              
                                                                                let cursor = await db.collection('chest').find( { exercize_type: "In-gym", exerciye_dificulty:"Advanced" })
                                                                                let result = await cursor.toArray()
                                                                              
                                                                                res.json(result)
                                                                              
                                                                                })




app.listen(port, () => console.log(`Slušam na portu ${port}!`));
