import React from 'react'
import './main.scss'
import addIco from './assets/add-ico.svg'
import arrowDown from './assets/arrow-down.svg'
export const Main = () => {
    Date.prototype.daysInMonth = function() {
        return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };
    const data = new Date().getDate()
    const mouth = new Date().daysInMonth()
    return (
        <div className='main-block'>
            <div className="main-block-my-students">
                <h1>Мои ученики</h1>
                <div className="student-group">
                    <p className='students'>Ученики</p>
                    <p>Группы</p>
                </div>
                <div className="line">

                </div>
                <div className="add-student">
                    <div className="add-buttons">
                        <div className="add-student-button">
                            <img src={addIco} alt=""/>
                            <p>Добавить ученика</p>
                        </div>
                        <div className="add-group-button">
                            <img src={addIco} alt=""/>
                            <p>Создать группу</p>
                        </div>
                    </div>
                    <div className="field-students">
                        <img src={addIco} alt=""/>
                        <p>Добавьте своего первого ученика</p>
                    </div>
                </div>
            </div>
            <div className="raspisanie">


            <div className="time-table">
                <p>Рассписание</p>
                <p>16 Июня - 22 Июня</p>
                <img src={arrowDown} alt=""/>
            </div>
            {/*<div className="table-date">*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*    <div className="date">*/}
            {/*        <p>16</p>*/}
            {/*        <p>пон</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
                <div className="table-block">
                    <table cellSpacing='0'>
                        <tr className='header-table'>
                            <th>

                            </th>
                            <td>
                                <div className="date">
                                <p>{data}</p>
                                <p>пон</p>
                            </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>{data < mouth ? }</p>
                                    <p>пон</p>
                                </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>16</p>
                                    <p>пон</p>
                                </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>16</p>
                                    <p>пон</p>
                                </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>16</p>
                                    <p>пон</p>
                                </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>16</p>
                                    <p>пон</p>
                                </div>
                            </td>
                            <td>
                                <div className="date">
                                    <p>16</p>
                                    <p>пон</p>
                                </div>
                            </td>

                        </tr>
                        <tr>
                            <td>8:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>9:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>13:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>14:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>15:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>16:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>17:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>18:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>19:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>20:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>21:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>22:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>23:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>24:00</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>{data}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}