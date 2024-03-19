import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [dataLoading, setDatatLoading] = useState(true);
    useEffect(() => {
        fetch("http://localhost:5000/menu")
        .then(res => res.json())
        .then(data => {
            setMenu(data)
            setDatatLoading(false)
        })
    }, [])
    return[menu, dataLoading]
}

export default useMenu