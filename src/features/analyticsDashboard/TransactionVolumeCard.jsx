import React, { useMemo, useState } from 'react';
import { ResponsiveContainer, ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const makeData = (mode) => {
  const base = [
    { day: 'Mon', count: 42, value: 35 },
    { day: 'Tue', count: 58, value: 53 },
    { day: 'Wed', count: 36, value: 41 },
    { day: 'Thu', count: 49, value: 47 },
    { day: 'Fri', count: 61, value: 55 },
    { day: 'Sat', count: 45, value: 39 },
    { day: 'Sun', count: 38, value: 34 },
  ];
  if (mode === 'Daily') return base;
  if (mode === 'Monthly') {
    return base.map((d, i) => ({ ...d, count: d.count * 4 - i * 2, value: d.value * 3 - i }));
  }
  return base.map((d, i) => ({ ...d, count: d.count * 2 - i, value: d.value * 1.6 - i * 0.8 }));
};

const TransactionVolumeCard = () => {
  const [mode, setMode] = useState('Weekly');
  const data = useMemo(() => makeData(mode), [mode]);

  return (
    <div className="bg-white border rounded-3 p-3 h-100">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="fw-semibold text-dark">Transaction Volume</div>
        <div className="d-flex align-items-center gap-2">
          <div className="btn-group btn-group-sm" role="group">
            {['Daily', 'Weekly', 'Monthly'].map((m) => (
              <button key={m} className={`btn ${mode === m ? 'btn-primary' : 'btn-outline-secondary'}`} onClick={() => setMode(m)}>{m}</button>
            ))}
          </div>
          <button className="btn btn-link text-decoration-none text-secondary p-0 ms-2" title="Export"><i className="bi bi-box-arrow-up-right"/></button>
        </div>
      </div>
      <div style={{ width: '100%', height: 280 }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -10 }}>
            <defs>
              <linearGradient id="valueFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0d6efd" stopOpacity={0.25}/>
                <stop offset="95%" stopColor="#0d6efd" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="day" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Area type="monotone" dataKey="value" name="Transaction Value (K)" stroke="#0d6efd" fill="url(#valueFill)" strokeWidth={2} />
            <Line type="monotone" dataKey="count" name="Transaction Count" stroke="#6c757d" strokeWidth={2} dot={{ r: 2 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionVolumeCard;
