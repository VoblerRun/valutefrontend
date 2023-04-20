import React, {useEffect, useState} from 'react';
import ValuteService from "./ValuteService";
import Valute from "./Valute";
import PageValute from "./PageValute";
import Pagination from "./Pagination";

function Home() {


    const [valutes, setValute] =  useState<Valute[]>([]);
    const fetchData = async () => {
        const response = await ValuteService.findAll();
        setValute(response);
        onPageChange(1);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const [displayedData, setDisplayedData] = useState<Valute[]>([]);
    const itemsPerPage = 10;
    const allPages = Math.ceil(valutes.length / itemsPerPage);

    const onPageChange = (page: number = 1) => {
        const startItem = (page - 1) * itemsPerPage;
        const endItem = page * itemsPerPage;
        setDisplayedData(valutes.slice(startItem, endItem));
        console.log('displayedData ', displayedData);
    }

    return(
    <div>
    Все валюты со значением к евру
        <div className="valute">
            <PageValute  items= {displayedData} />
            <Pagination allPagesNumber={allPages} itemsPerPage={10} itemsNumber={valutes.length} pageChange={onPageChange}/>
        </div>
    </div>
    );
}

export default Home;