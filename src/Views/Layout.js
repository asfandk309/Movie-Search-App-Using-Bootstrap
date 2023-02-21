import React from "react";
import Header from "./header";
function Layout({children})
{
    return(
        <div>
            < Header/>
            <div className="container">{children}</div>
        </div>
    )
}
export default Layout;