import React from 'react'
import useBooksApplication from '../SportsBooksAndMore/useBooksApplication'
import LibraryBook from '../SportsBooksAndMore/LibraryBook'
import Music from '../SportsBooksAndMore/Music'
import Playing from '../SportsBooksAndMore/Playing'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";


const BooksApplication = () => {

    const { state:
        {
            Book,
            MusicalInstrument,
            Sport
        }
    } = useBooksApplication();

    return (
        <>
            <Router>
                <ul style={{ listStyleType: 'none' }}>
                    <li ><div class="col "><Link to="/Books"><h5>Books</h5></Link></div></li>
                    <li ><div class="col "><Link to="/>MusicalInstrument"><h5>MusicalInstrument</h5></Link></div></li>
                    <li ><div class="col "><Link to="/Sports"><h5>Sports</h5></Link></div></li>

                </ul>
                <Route exact path="/Books" component={() => <LibraryBook Book={Book} />}></Route>
                <Route exact path="/>MusicalInstrument" component={() => <Music MusicalInstrument={MusicalInstrument} />}></Route>
                <Route exact path="/Sports" component={() => <Playing Sport={Sport} />}></Route>
            </Router>

        </>
    )
}

export default BooksApplication