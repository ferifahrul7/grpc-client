// import "src/generated/pingpong_grpc_web_pb"
import { PingPongClient } from "src/generated/pingpong_grpc_web_pb";

import {PingRequest} from 'src/generated/pingpong_pb';

export default function service() {
    var PingPongService = new PingPongClient('http://localhost:8080');

// simple unary call
var request = new PingRequest()
request.setNama("feri")
   return  PingPongService.ping(request,{},(err,response)=> {
    console.log(err,response.getNama())
   } )
   
//    .echo(request, {}, function(err, response) {
//         if (err) {
//             console.log(err.code);
//             console.log(err.message);
//         } else {
//             console.log(response.getMessage());
//         }
//     });
}