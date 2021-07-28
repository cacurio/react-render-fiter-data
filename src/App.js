import React from 'react';
import './style.css';
import { find } from 'lodash';

export default function App() {
  const CERTFICATES = [
    {
      type: 'SNR',
      data: [
        {
          since: '0',
          to: '500',
          comission: '12%',
          value: '22.333 COP'
        },
        {
          since: '501',
          to: '1,000',
          comission: '13%',
          value: '22.333 COP'
        },
        {
          since: '1,001',
          to: '1,500',
          comission: '14%',
          value: '21.825 COP'
        },
        {
          since: '1,501',
          to: '2,000',
          comission: '15%',
          value: '21.571 COP'
        },
        {
          since: '2,001',
          to: '2,500',
          comission: '16%',
          value: '21.318 COP'
        },
        {
          since: '2,501',
          to: '3,000',
          comission: '17%',
          value: '22.333 COP'
        },
        {
          since: '3,001',
          to: '3,500',
          comission: '18%',
          value: '21.064 COP'
        },
        {
          since: '3,501',
          to: '4,000',
          comission: '19%',
          value: '20.810 COP'
        },
        {
          since: '4,001',
          to: '4,500',
          comission: '21%',
          value: '20.556 COP'
        },
        {
          since: '4,501',
          to: '5,000',
          comission: '21%',
          value: '20.303 COP'
        },
        {
          since: '5,001',
          to: '6,000',
          comission: '22%',
          value: '20.049 COP'
        },
        {
          since: '6,001',
          to: '7,000',
          comission: '23%',
          value: '19.795 COP'
        },
        {
          since: '7,001',
          to: ' - ',
          comission: '24%',
          value: '19.541 COP'
        }
      ]
    },
    {
      type: 'RUNT',
      data: [
        {
          since: '0',
          to: '500',
          comission: '12%',
          value: '22.333 COP',
          iva: '19%'
        },
        {
          since: '501',
          to: '1,000',
          comission: '13%',
          value: '22.333 COP',
          iva: '19%'
        },
        {
          since: '1,001',
          to: '1,500',
          comission: '14%',
          value: '21.825 COP',
          iva: '19%'
        },
        {
          since: '1,501',
          to: '2,000',
          comission: '15%',
          value: '21.571 COP',
          iva: '19%'
        },
        {
          since: '2,001',
          to: '2,500',
          comission: '16%',
          value: '21.318 COP',
          iva: '19%'
        },
        {
          since: '2,501',
          to: '3,000',
          comission: '17%',
          value: '22.333 COP',
          iva: '19%'
        },
        {
          since: '3,001',
          to: '3,500',
          comission: '18%',
          value: '21.064 COP',
          iva: '19%'
        },
        {
          since: '3,501',
          to: '4,000',
          comission: '19%',
          value: '20.810 COP',
          iva: '19%'
        },
        {
          since: '4,001',
          to: '4,500',
          comission: '21%',
          value: '20.556 COP',
          iva: '19%'
        },
        {
          since: '4,501',
          to: '5,000',
          comission: '21%',
          value: '20.303 COP',
          iva: '19%'
        },
        {
          since: '5,001',
          to: '6,000',
          comission: '22%',
          value: '20.049 COP',
          iva: '19%'
        },
        {
          since: '6,001',
          to: '7,000',
          comission: '23%',
          value: '19.795 COP',
          iva: '19%'
        },
        {
          since: '7,001',
          to: ' - ',
          comission: '24%',
          value: '19.541 COP',
          iva: '19%'
        }
      ]
    }
  ];


  const data = find(CERTFICATES, d => d.type === 'SNR');

  return (
    <>
      <ul>
        {data.data.map(d => (
          <li key>{`${d.since} | ${d.to} | ${d.iva}`}</li>
        ))}
      </ul>
    </>
  );
}
