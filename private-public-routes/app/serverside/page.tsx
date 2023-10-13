import { sessionStatus } from "@/util/session";
import { redirect } from "next/navigation";

const ServerSidePage = () => {
    const session = sessionStatus

    if(!session){
        redirect('/')
    }

  return <div>Server side page...</div>;
};

export default ServerSidePage;
