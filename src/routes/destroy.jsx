import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";


export async function action({params}){
    
    if(await deleteContact(params.contactId)){
        return redirect("/");
    }else{
        throw new Error("Oh dang!");
    }
    
}