import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
    return (
        <div className="py-6">
            <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-1/3 object-cover"
                    src={props.thumbnailCard}
                    alt="item">
                </img>
                <div className="w-2/3 p-4">
                    <h1 className="text-stone-900 font-bold text-2xl">{props.name}</h1>
                    <div className="flex item-center mt-2">
                        <p className="text-center">{props.rate}</p>
                        <p className="text-center">{props.ratings}</p>
                        {props.rate === 0 ?
                            <svg className="w-5 h-5 self-center fill-current text-stone-400" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg> :
                            <svg className="w-5 h-5 self-center fill-current text-rose-700" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                            </svg>}
                    </div>
                    <div className="flex item-center justify-between mt-3">
                        <h1 className="text-stone-700 font-bold text-xl">${props.price}.00</h1>
                        <Link to={`/item/${props.id}`}>
                            <button className="px-3 py-2 bg-rose-800 text-white text-xs font-bold uppercase rounded">
                                More details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
