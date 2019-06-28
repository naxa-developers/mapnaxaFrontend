import React, { Component } from 'react';
import {
    FaTimes,
    FaSchool,
    FaRoad,
} from "react-icons/fa";
import Point from '../components/Stylingvectorpoint'
import Polygon from '../components/Stylingvectorpolygon'
import Line from '../components/Stylingvectorline'
import Layers from '../res/Data'







class LayerItems extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    name: "Road",
                    type: "Point",
                    icon: FaRoad,
                    actions: ["Road", "l2", "l3"],
                    subitems: ["Mahendra Highway", "Prithivi Highway"]
                },
                {
                    id: 2,
                    name: "Education",
                    type: "Polygon",
                    icon: FaSchool,
                    actions: ["Education", "r2", "r3"],
                    subitems: ["Kathmandu University", "Trivhuwan University"]
                },
                {
                    id: 3,
                    type: "Line",
                    name: "Health",
                    icon: FaSchool,
                    actions: ["Health", "g2", "g3"],
                    subitems: ["Medical", "Pharmacy", "Hospital"]
                }
            ],
            selectedType: null
        }
    }
    onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    }
    clickHandler = (e, type) => {
        console.log("asdasd", type);
        this.setState({
            selectedType: type
        });
    };
    removeHandler = e => {
        e.stopPropagation();
        this.setState({ selectedType: null });
    };
    render() {
        console.log(this.state.selectedType);
        const categoryArray = [];
        Layers.map((item) => categoryArray.push(item.category));
        const uniqueCategory = categoryArray.filter(this.onlyUnique)
        var filtered = [];

        console.log(filtered)

        return (
            <div >
                {uniqueCategory.map(item => (
                    <div className="layer-item-holder" key={item}>
                        <div>
                            <p style={{fontStyle:"Bold",fontWeight:600}}>
                            {item}
                            </p>
                        </div>
                        {Layers.filter((i) => (i.category === item)).map((it) => {
                            return(<div
                                className={
                                    this.state.selectedType === it.type
                                        ? "layer-item-parent relative item-active"
                                        : "layer-item-parent relative"
                                }
                                onClick={e => this.clickHandler(e, it.type)}
                            >
                                <div className="layer-parent-name noselect">
                                    {" "}
                                    {it.name}
                                </div>
                                {this.state.selectedType === it.type && (
                                    <div className="close-btn" onClick={this.removeHandler}>
                                        <FaTimes />
                                    </div>
                                )}
                            </div>)

                        })

                        }

                    </div>
                ))
                }

                {
                    this.state.selectedType && (
                        <div className="left-slide">
                            {
                                this.state.selectedType === "Polygon" ?
                                    <Polygon />
                                    :
                                    this.state.selectedType === "Point" ?
                                        <Point />
                                        :
                                        <Line />
                            }


                        </div>
                    )
                }
            </div >
        );
    }
}

export default LayerItems;

