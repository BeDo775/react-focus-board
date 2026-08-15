import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #333;
`;

export default function Header({ activeTab, onAddTask }) {
  return (
    <HeaderWrapper className="mb-4">
      <h3 style={{ color: '#f8f9fa', fontSize: '1.25rem', margin: 0 }}>
        Workspace / {activeTab}
      </h3>
      <button className="btn btn-primary" onClick={onAddTask}>
        + Add Task
      </button>
    </HeaderWrapper>
  );
}