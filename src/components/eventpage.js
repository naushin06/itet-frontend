import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EventPages = () => {
  const location = useLocation();
  const id = location.state.event._id;
  let actualname = location.state.event.name;
let fdate=location.state.event.fdate;
let tdate=location.state.event.tdate
const desc =location.state.event.desc
const ftime=location.state.event.ftime
const ttime=location.state.event.ttime
  const [data, setData] = useState({
    Date: "",
    Datedeadline: "",
    Datestatus: "",
    Time: "",
    Timedeadline: "",
    Timestatus: "",
    Fee: "",
    Feedeadline: "",
    Feestatus: "",
    venue: "",
    venuedeadline: "",
    venuestatus: "",
    Promotion: "",
    Promotiondeadline: "",
    Promotionstatus: "",
    Budget: "",
    Budgetdeadline: "",
    Budgetstatus: "",
    ZoomScedule: "",
    ZoomSceduledeadline: "",
    ZoomScedulestatus: "",
    LandingPage: "",
    LandingPagedeadline: "",
    LandingPagestatus: "",
    ZoomID: "",
    ZoomIDdeadline: "",
    ZoomIDstatus: "",
    poster: "",
    posterdeadline: "",
    posterstatus: "",
    Instagram: "",
    Instagramdeadline: "",
    Instagramstatus: "",
    FB: "",
    FBdeadline: "",
    FBstatus: "",
    Twitter: "",
    Twitterdeadline: "",
    Twitterstatus: "",
    Linkedin: "",
    Linkedindeadline: "",
    Linkedinstatus: "",
    SEO: "",
    SEOdeadline: "",
    SEOstatus: "",
    GroupCreation: "",
    GroupCreationdeadline: "",
    GroupCreationstatus: "",
    coldcalling: "",
    coldcallingdeadline: "",
    coldcallingstatus: "",
    email: "",
    emaildeadline: "",
    emailstatus: "",
    WhatsappSharing: "",
    WhatsappSharingdeadline: "",
    WhatsappSharingstatus: "",
    certificate: "",
    certificatedeadline: "",
    certificatestatus: "",
    participantlist: "",
    participantlistdeadline: "",
    participantliststatus: "",
    Recording: "",
    Recordingdeadline: "",
    Recordingstatus: "",
    Editing: "",
    Editingdeadline: "",
    Editingstatus: "",
    Upload: "",
    Uploaddeadline: "",
    Uploadstatus: "",
    ShareToTheUsers: "",
    ShareToTheUsersdeadline: "",
    ShareToTheUsersstatus: "",
    feedbackFormAnalysis: "",
    feedbackFormAnalysisdeadline: "",
    feedbackFormAnalysisstatus: "",
    KitArrngement: "",
    KitArrngementdeadline: "",
    KitArrngementstatus: "",
    photosUploadIntheFBanddrive: "",
    photosUploadIntheFBanddrivedeadline: "",
    photosUploadIntheFBanddrivestatus: "",
    addcontactDetailsInThePhone: "",
    addcontactDetailsInThePhonedeadline: "",
    addcontactDetailsInThePhonestatus: "",
    photosDuringtheevent: "",
    photosDuringtheeventdeadline: "",
    photosDuringtheeventstatus: "",
    guidepeople: "",
    guidepeopledeadline: "",
    guidepeoplestatus: "",
    oldphotos: "",
    oldphotosdeadline: "",
    oldphotosstatus: "",
    hallready: "",
    hallreadydeadline: "",
    hallreadystatus: "",
    projector: "",
    projectordeadline: "",
    projectorstatus: "",
    mike: "",
    mikedeadline: "",
    mikestatus: "",
    marker: "",
    markerdeadline: "",
    markerstatus: "",
    tea: "",
    teadeadline: "",
    teastatus: "",
    moneyCollecting: "",
    moneyCollectingdeadline: "",
    moneyCollectingstatus: "",
  });
  const [update,setUpdate] = useState({
    Date: "",
    Datedeadline: "",
    Datestatus: "",
    Time: "",
    Timedeadline: "",
    Timestatus: "",
    Fee: "",
    Feedeadline: "",
    Feestatus: "",
    venue: "",
    venuedeadline: "",
    venuestatus: "",
    Promotion: "",
    Promotiondeadline: "",
    Promotionstatus: "",
    Budget: "",
    Budgetdeadline: "",
    Budgetstatus: "",
    ZoomScedule: "",
    ZoomSceduledeadline: "",
    ZoomScedulestatus: "",
    LandingPage: "",
    LandingPagedeadline: "",
    LandingPagestatus: "",
    ZoomID: "",
    ZoomIDdeadline: "",
    ZoomIDstatus: "",
    poster: "",
    posterdeadline: "",
    posterstatus: "",
    Instagram: "",
    Instagramdeadline: "",
    Instagramstatus: "",
    FB: "",
    FBdeadline: "",
    FBstatus: "",
    Twitter: "",
    Twitterdeadline: "",
    Twitterstatus: "",
    Linkedin: "",
    Linkedindeadline: "",
    Linkedinstatus: "",
    SEO: "",
    SEOdeadline: "",
    SEOstatus: "",
    GroupCreation: "",
    GroupCreationdeadline: "",
    GroupCreationstatus: "",
    coldcalling: "",
    coldcallingdeadline: "",
    coldcallingstatus: "",
    email: "",
    emaildeadline: "",
    emailstatus: "",
    WhatsappSharing: "",
    WhatsappSharingdeadline: "",
    WhatsappSharingstatus: "",
    certificate: "",
    certificatedeadline: "",
    certificatestatus: "",
    participantlist: "",
    participantlistdeadline: "",
    participantliststatus: "",
    Recording: "",
    Recordingdeadline: "",
    Recordingstatus: "",
    Editing: "",
    Editingdeadline: "",
    Editingstatus: "",
    Upload: "",
    Uploaddeadline: "",
    Uploadstatus: "",
    ShareToTheUsers: "",
    ShareToTheUsersdeadline: "",
    ShareToTheUsersstatus: "",
    feedbackFormAnalysis: "",
    feedbackFormAnalysisdeadline: "",
    feedbackFormAnalysisstatus: "",
    KitArrngement: "",
    KitArrngementdeadline: "",
    KitArrngementstatus: "",
    photosUploadIntheFBanddrive: "",
    photosUploadIntheFBanddrivedeadline: "",
    photosUploadIntheFBanddrivestatus: "",
    addcontactDetailsInThePhone: "",
    addcontactDetailsInThePhonedeadline: "",
    addcontactDetailsInThePhonestatus: "",
    photosDuringtheevent: "",
    photosDuringtheeventdeadline: "",
    photosDuringtheeventstatus: "",
    guidepeople: "",
    guidepeopledeadline: "",
    guidepeoplestatus: "",
    oldphotos: "",
    oldphotosdeadline: "",
    oldphotosstatus: "",
    hallready: "",
    hallreadydeadline: "",
    hallreadystatus: "",
    projector: "",
    projectordeadline: "",
    projectorstatus: "",
    mike: "",
    mikedeadline: "",
    mikestatus: "",
    marker: "",
    markerdeadline: "",
    markerstatus: "",
    tea: "",
    teadeadline: "",
    teastatus: "",
    moneyCollecting: "",
    moneyCollectingdeadline: "",
    moneyCollectingstatus: "",
  });
const eventDetailsFetching=()=>{
  axios.post("https://itet-backend-em.onrender.com/eventDetails",{id:id}).then(()=>{
    axios.post("https://itet-backend-em.onrender.com/eventDetailsUpdation",{ id:id}).then((res)=>{

    let updateData=res.data

for (let key in updateData) {
let value = updateData[key];
setUpdate((prevUpdate) => ({ ...prevUpdate, [key]: value }));
}
});
  })
}
useEffect(()=>{
eventDetailsFetching()
  
},[])
// useEffect hook to perform actions based on the updated state
useEffect(() => {

  // Here, you can access the updated state after the component re-renders
let a='hii'
  // Do other actions based on the updated state...
}, [update]); 
const deleteHandler=(id)=>{
console.log(id);
}
// const dataHandler=()=>{
// axios.post("http://localhost:3001/eventDetails",{id:id})
// }

  //to fiter out empty elements from the entire object 
  function filterEmptyAttributes(obj) {
    const filteredObj = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        // Exclude empty-valued attributes
        if (value !== null && value !== undefined && value !== '') {
          filteredObj[key] = value;
        }
      }
    }
    return(filteredObj)
   
  }

  
  function updation(non_emob){
    const promises = [];
   for(let keys in non_emob){
    let value=non_emob[keys]
     axios.post("https://itet-backend-em.onrender.com/update", { id:id ,name:keys,value:value });
    }
    return Promise.all(promises);
  }
  function updateHandler() {
    console.log(data)
    let non_emob= filterEmptyAttributes(data)
    updation(non_emob).then(()=>{
      axios.post("https://itet-backend-em.onrender.com/eventDetailsUpdation",{ id:id}).then((res)=>{

      let updateData=res.data
  
 
for (let key in updateData) {
  let value = updateData[key];
  setUpdate((prevUpdate) => ({ ...prevUpdate, [key]: value }));
}


  });
    })
  }
  const feilds = [
    "Date",
    "Time",
    "Fee",
    "venue",
    "Promotion",
    "Budget",
    "ZoomScedule",
    "LandingPage",
    "ZoomID",
    "poster",
    "Instagram",
    "FB",
    "Twitter",
    "Linkedin",
    "SEO",
    "GroupCreation",
    "coldcalling",
    "email",
    "WhatsappSharing",
    "certificate",
    "participantlist",
    "Recording",
    "Editing",
    "Upload",
    "ShareToTheUsers",
    "feedbackFormAnalysis",
    "KitArrngement",
    "photosUploadIntheFBanddrive",
    "addcontactDetailsInThePhone",
    "photosDuringtheevent",
    "guidepeople",
    "oldphotos",
    "hallready",
    "projector",
    "mike",
    "marker",
    "tea",
    "moneyCollecting",
  ];

  return (
    <div className="table">
<div className="content">
<p className="actual-name" > {actualname} - ( {desc} ) </p> 
<p> {fdate} - {tdate} </p>
<p> {ftime} - {ttime} </p>
</div>
     <div class="table-responsive">
        <table className="table" id="todo-table">
          <thead className="todo-tablehead">
           <tr className="todo-headrow">
              <th className="todo-head">Event</th>
              <th className="todo-head">EVENT-INPUT</th>
              <th className="todo-head">EVENT</th>
              <th className="todo-head">DEADLINE-INPUT</th>
              <th className="todo-head">DEADLINE</th>
              <th className="todo-head">STATUS-INPUT</th>
              <th className="todo-head">STATUS</th>
           </tr>
          </thead>
<tbody className="todo-body" >
{

  feilds.map((item) => {
    // Declare a variable inside the map function
    const status =item+"status"
const deadline=item+"deadline"
const updatedname=update[item]
const updatedstatus=update[status]
const updatedeadline=update[deadline]
let name=''
if(updatedstatus){
  if(updatedstatus==='COMPLETED'){
    name='green'
  }
  if(updatedstatus==='IN-Progress'){
    name='blue'
  }
  if(updatedstatus==='ON-hold'){
    name='grey'
  }
  if(updatedstatus==='Not-started'){
    name='red'
  }
}

    return (
      <tr className="todo-bodyrow" key={item.id}>
        <td className="todo-bodydata" >{item}</td>

        <td  className="todo-bodydata">
          <input className="todo-bodyinput"
            type="text"
            name={item}
            value={data.event}
            onChange={(e) =>
              setData({ ...data, [e.target.name]: e.target.value })
            }
            placeholder={item}
          />
        </td>
        <td  className="todo-bodydata">{updatedname}</td>
        <td  className="todo-bodydata">
          <input className="todo-bodyinput"
            type="date"
            name={deadline} // Added "deadline" to the name to differentiate from the other input
            value={data.deadline}
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          />
        </td>
        <td  className="todo-bodydata">{updatedeadline}</td>
        <td className="todo-bodyinput" >
          <select className="todo-bodyinput" id="todo-status"
            name={status} // Added "status" to the name to differentiate from the other input
            onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
          >
            <option>
              None
            </option>
            <option value="Not-started">
              Not-started
            </option>
            <option  value="IN-Progress">
              IN-Progress
            </option>
            <option value="ON-hold">
              ON-hold
            </option>
            <option value="COMPLETED">
              COMPLETED
            </option>
          
          </select>
        </td>
        <td id={name} className="todo-bodyinput">{updatedstatus}</td>
      </tr>
    );
  })
}
</tbody>
        </table>
      </div>
      <button type="submit" className="save-all-button" onClick={updateHandler}>
        save all button
      </button>
      

    </div>
    
  );
};
export default EventPages;