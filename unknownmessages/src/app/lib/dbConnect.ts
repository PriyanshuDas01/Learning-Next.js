import { Console } from "console";
import mongoose from "mongoose";

type ConnectObject = {
    isConnected?: number
}
const connection:  ConnectObject = {}
 
async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected");
    
        return
            
    }
    
}