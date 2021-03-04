import React from 'react';

export default function Footer({author,  children}) {
    return(
        <footer>
            <h1>{author}</h1>
            {children}
          
        </footer>
    );
}