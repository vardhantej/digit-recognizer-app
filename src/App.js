import React,{useEffect, useRef, useState} from 'react';
import './App.css';
import {fetchPredictionFromURL} from './api/index';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Card from '@mui/material/Card';

const App = () => {
  
  const canvasRef=useRef(null); //holds a mutable value/object b/w re renders. Used to access elements
  const contextRef = useRef(null);

  const [isDrawing,setIsDrawing]=useState(false); //to remember that the button is pressed while drawing
  const [imgDataURL,setImgDataURL]=useState("");
  const [submit,setSubmit]=useState(false);
  const [prediction,setPrediction]=useState(-1);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{

    if(imgDataURL==""){
      setLoading(false);
      return;
    }

    fetchPredictionFromURL(imgDataURL).then((response)=>{
        setPrediction(response.data);
        setLoading(!loading);
    });

    
  },[submit]);

  

  const handleSubmit=()=>{
    setSubmit(!submit);
    setLoading(true);
  }



  useEffect(()=>{

    //canvas
    const canvas=canvasRef.current;
    canvas.width=300;
    canvas.height=300;

    
    
    //Creating context
    const context= canvas.getContext("2d");
    context.lineCap="round"; //rounded corners in the line
    context.strokeStyle="black";
    context.lineWidth=25;
    context.fillStyle="white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current= context;



  },[]);


  

 

  
  const startDrawing=({nativeEvent})=>{ //nativeEvent returns the browser's underlying native event. Note: React uses synthetic events which are different from, and do not map directly to, the browser's native events
    const {offsetX, offsetY}=nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX,offsetY);
    setIsDrawing(true);
  }
  
  
  const finishDrawing=()=>{
    contextRef.current.closePath();
    setIsDrawing(false);
    const canvas = canvasRef.current;
    setImgDataURL(canvas.toDataURL('image/jpeg'));
  }

  
  const draw=({nativeEvent})=>{
    if(!isDrawing){
      return;
    }
    const {offsetX,offsetY}=nativeEvent;
    contextRef.current.lineTo(offsetX,offsetY);
    contextRef.current.stroke();
  }
  
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
    setImgDataURL("");
    setPrediction(-1);
  }
  
  return ( 
    <div className="container">

        <AppBar sx={{alignItems: 'center'}} position="sticky" >
          <Toolbar>
            <Typography variant="h3" component="div" >
              Digit Recognizer 
            </Typography>
          </Toolbar>
        </AppBar>

        <br/>
        <Typography variant="h5" component="div" >
              Draw a digit between (0-9) 
        </Typography>
        

        <Typography variant="h7" component="div" >
              For Better Results, try drawing at the center of the canvas 
        </Typography>
        <br/>

        <canvas className="canvas" onMouseDown={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef}></canvas><br/><br/>
        <Button variant="contained" onClick={clearCanvas} sx={{margin: '5px',}}>Clear</Button>
        <LoadingButton onClick={handleSubmit} endIcon={<SendIcon />} loading={loading} loadingPosition="end" variant="contained">Submit</LoadingButton>
        
        <Card sx={{marginTop:'15px',marginLeft:'auto',marginRight:'auto',maxWidth:'250px'}} >
          <Typography variant="h5" component="div">
             CNN Prediction: {prediction!==-1? `${prediction}`: '' }
          </Typography>
        </Card>


    </div>


   );
}
 
export default App;

