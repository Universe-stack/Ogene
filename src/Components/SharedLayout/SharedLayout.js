import { Outlet } from "react-router-dom";
import Layout from "../../Containers/hoc/Layout/Layout";

const SharedLayout=()=>{

    return(
        <>
            <Layout>
                <Outlet/>
            </Layout>
        </>
    )
}

export default SharedLayout;