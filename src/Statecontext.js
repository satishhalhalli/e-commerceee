import React, { useContext, useState, createContext,useEffect} from "react";
import axios from 'axios';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [openModal,setOpenModal]=useState(false);
  const[cartElements,setCartElements]=useState([]);
  const[update,setUpdate]=useState(0);
  const[loadpage,setLoadPage]=useState(0);
  const[isLogin,setIsLogin]=useState(false);
  const[token,setToken]=useState('null');
const[email,setEmail]=useState();
const[signup,setSignup]=useState(false);
const[notlogout,setNotlogout]=useState(false);
const[disable,setDisable]=useState(false);
const[price,setPrice]=useState(0);
  let loginemail;
  let emailpresent;
  const url='d261140c4a7e46f199d26d3c73578df7';

useEffect(()=>{
  emailpresent=localStorage.getItem('email');
  if(emailpresent!=='null'){
  console.log('email exist');
setIsLogin(true);
loginemail= emailpresent.split('@')[0];
}
  if(isLogin){
    (async()=>{
      await axios.get(`https://crudcrud.com/api/${url}/cart${loginemail}`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        console.log(response.data[i])
setCartElements((prev)=>[...prev,response.data[i]]) 
setUpdate((prev)=>prev+1);
let newp=response.data[i].price*response.data[i].quantity;
setPrice((prev)=>prev+newp);
      } 
 })
.catch(err=>console.log('hii'));
    })()
 
    const val=localStorage.getItem('id');
    if(val!=='null'){
   setToken(val);
    }  
  }
  },[isLogin])
  
  const ShowCart=()=>{
    setOpenModal(true);
}

const onlogout=()=>{
  localStorage.setItem('id','null');
  localStorage.setItem('email','null');
  setIsLogin(false);
  setNotlogout(true);
  setCartElements([]);
  setUpdate(0);
  setPrice(0);
}

  const productsArr = [{

title: 'Colors',
price: 100,
imageUrl: 'https://images.bewakoof.com/t1080/men-s-black-save-our-home-t-shirt-276160-1655747776-1.jpg',id:1,
quantity:1,
review:4
},

{
title: 'Black and white Colors',
price: 50,
imageUrl: 'https://images.bewakoof.com/t1080/lost-mountains-half-sleeve-t-shirt-272010-1655748131-1.jpg',
quantity:1,
id:2,review:3},

{
title: 'Yellow and Black Colors',
price: 70,
imageUrl: 'https://images.bewakoof.com/t640/women-s-pink-sea-u-never-graphic-printed-oversized-t-shirt-585499-1680539404-1.jpg',
quantity:1,
id:3,review:4
},
{
title: 'Blue Color',
price: 100,
imageUrl: 'https://images.bewakoof.com/t640/women-s-blue-samurai-cat-graphic-printed-boyfriend-t-shirt-585728-1680526356-1.jpg',
quantity:1,
id:4,review:2
}
]

const AddtoCart=async (item)=>{
          const newArray = [...cartElements];
            emailpresent=localStorage.getItem('email');

loginemail= emailpresent.split('@')[0];
console.log(loginemail);
    let flag=false;
    let indexs,ind;
    let article;
    if(newArray.length>0){
        newArray.forEach((i,index)=>{
            if(i.title===item.title)
            {
            flag=true;
            indexs=index;
            }
        })
        if(flag===false){
          console.log('new added');
      setCartElements((prev)=>[...prev,item])
      await axios.post(`https://crudcrud.com/api/${url}/cart${loginemail}`,item)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err));
                  setUpdate((prev)=>prev+1);
                  setPrice((prev)=>prev+item.price);

        }
        else{
          console.log(indexs);
            console.log('already added');
            console.log(newArray);
                        newArray[indexs].quantity = Number(newArray[indexs].quantity) + 1;
                         article={
              title:item.title,
               price:item.price,
               quantity:newArray[indexs].quantity
            }
            await axios.get(`https://crudcrud.com/api/${url}/cart${loginemail}`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        if(response.data[i].title===item.title)
        ind=response.data[i]._id;
      }
      })
      console.log(ind);
  await axios.put(`https://crudcrud.com/api/${url}/cart${loginemail}/${ind}`,article)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err)); 
            setCartElements(newArray);
                              setPrice((prev)=>prev+item.price);

        }
    }


    else{
      console.log('new added')
setCartElements((prev)=>[...prev,item])
await axios.post(`https://crudcrud.com/api/${url}/cart${loginemail}`,item)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err));
setUpdate((prev)=>prev+1);
                  setPrice((prev)=>prev+item.price);

}
setLoadPage((prev)=>prev+1);
}

const incrementqty=async(item)=>{
              emailpresent=localStorage.getItem('email');
  loginemail= emailpresent.split('@')[0];
 const newArray = [...cartElements];
         let article;
let ind;
await axios.get(`https://crudcrud.com/api/${url}/cart${loginemail}`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        if(response.data[i].title===item.title)
        ind=response.data[i]._id;
      }
      })
        newArray.forEach((element, index) => {
          if (element.title === item.title) {
            newArray[index].quantity = Number(newArray[index].quantity) + 1;
            article={
              title:item.title,
               price:item.price,
               quantity:newArray[index].quantity
            }
          }
        });
        console.log(ind);
        setCartElements(newArray);
                          setPrice((prev)=>prev+item.price);

await axios.put(`https://crudcrud.com/api/${url}/cart${loginemail}/${ind}`,article)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err)); 

}

const decrementqty=async(item)=>{
const newArray = [...cartElements];
emailpresent=localStorage.getItem('email');
  loginemail= emailpresent.split('@')[0];
 let article;
let ind;

if(item.quantity>1){
await axios.get(`https://crudcrud.com/api/${url}/cart${loginemail}`)
   .then((response)=>{
      for(let i=0;i<response.data.length;i++){
        if(response.data[i].title===item.title)
        ind=response.data[i]._id;
      }
      })
        newArray.forEach((element, index) => {
          if (element.title === item.title) {
            newArray[index].quantity = Number(newArray[index].quantity) - 1;
            article={
              title:item.title,
               price:item.price,
               quantity:newArray[index].quantity
            }
          }
        });
        setCartElements(newArray);
                          setPrice((prev)=>prev-item.price);

        await axios.put(`https://crudcrud.com/api/${url}/cart${loginemail}/${ind}`,article)
.then(res=>{
console.log(res.data);     })
  .catch(err=>console.log(err)); 
}
else{
  console.log('hooo');
  setDisable(true);
}

}
const removeitemfromcart=async (item)=>{
  emailpresent=localStorage.getItem('email');
  loginemail= emailpresent.split('@')[0];
let ind;
  const newCartElement=cartElements;

await axios.get(`https://crudcrud.com/api/${url}/cart${loginemail}`)
   .then((response)=>{
      for(var i=0;i<response.data.length;i++){
        if(response.data[i].title===item.title){
        ind=response.data[i]._id;
  newCartElement.splice(i, 1);
        }
      }
      })
  axios.delete(`https://crudcrud.com/api/${url}/cart${loginemail}/${ind}`)
.then(res=>{
console.log(res.data);    
 })
  .catch(err=>console.log(err));
  console.log(newCartElement);
  setCartElements(newCartElement);
  setUpdate((prev)=>prev-1);
  let valp=item.price*item.quantity;
                    setPrice((prev)=>prev-valp);

}
  return (
    <Context.Provider
      value={{
       ShowCart,openModal,price,AddtoCart,cartElements,setOpenModal,signup,setSignup,update,incrementqty,decrementqty,removeitemfromcart,setEmail,onlogout,email,productsArr,token,setToken,isLogin,setIsLogin
        }}>
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);