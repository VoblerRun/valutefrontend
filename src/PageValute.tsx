import React from 'react';
import Valute from "./Valute";


interface ParentState {
    items: Valute[];
}

const PageValute: React.FC<ParentState> = (props) => {
    console.log('props', props.items);
        return (
            <div >
                <div>
                    {

                        props.items.map((item: Valute) => {
                            return (
                                <p key={item.id}>
                                    {item.name} - {item.value}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

export default PageValute;