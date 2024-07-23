import { ReactNode } from 'react'

interface IProps {
    children: ReactNode;
    color: string;
}

export default function Tag({ children, color }: IProps) {
    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '4px',
                color: '#fff',
                padding: '0.2rem 0.5rem',
                fontWeight: 'bold',
            }}
        >
            {children}
        </span>
    );
}
