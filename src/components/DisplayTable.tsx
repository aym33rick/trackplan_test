import React from 'react';

function DisplayTable(props: { word: string; reverse: boolean; }) {

    const {word, reverse} = props;

    return (
        <table>
            <tbody>
            {word.split('').map((char: string, index: number) => (
                <tr key={index}>
                    {word.split('').map((_, i: number) => {
                            if (!reverse && i === index) {
                                return <td key={i}>{char}</td>
                            } else if (reverse && i === word.length - 1 - index) {
                                return <td key={i}>{char}</td>
                            } else {
                                return <td key={i}></td>
                            }
                        }
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default DisplayTable;