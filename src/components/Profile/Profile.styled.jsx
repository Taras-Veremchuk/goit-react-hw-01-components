import styled  from "@emotion/styled";

export const ProfileSection = styled.div`
    max-width: 354px;
    margin-right: auto;
    margin-left: auto;
    border-radius: 10px;
    font-size: 16px;
    line-height: 1.19;
    letter-spacing: .03em;
    background-color: white;
        margin-bottom: 35px;
}`
export const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 8px;
    `
export const Avatar = styled.img`
display: block;
max-width: 200px;
height: auto;
vertical-align: top;
border-radius: 50%;
    border: 2px solid #73b1c1;
}`
export const Name = styled.p`
font-weight: 900;
    font-size: 26px;`
export const Tag = styled.p`
    color: #588d9c;`
export const Location = styled.p`
    color: #588d9c;`
export const List = styled.ul`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    justify-content: space-between;
    padding: 10px;
    background-color: #f1d18a;
    border-radius:0 0 8px 8px`
export const Item = styled.li`
    display: flex;
    flex-direction:column;
    align-items: center;
    `
export const Label = styled.span``
export const Quantity = styled.span`
font-weight: 900;
    font-size: 20px;`
