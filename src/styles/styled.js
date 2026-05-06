import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  background: #f4f6f8;
  min-height: 100vh;
  font-family: "Segoe UI", sans-serif;
`;

export const Header = styled.h1`
  margin-bottom: 20px;
  color: #2c3e50;
`;

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-wrap: wrap;
`;

export const Select = styled.select`
  padding: 8px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  cursor: pointer;
`;

export const Summary = styled.div`
  margin-top: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #27ae60;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  text-align: left;
  padding: 10px;
  background: #f1f1f1;
`;

export const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const Empty = styled.p`
  text-align: center;
  color: gray;
  padding: 20px;
`;