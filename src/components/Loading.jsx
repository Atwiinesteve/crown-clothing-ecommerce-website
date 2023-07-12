import React from 'react'

export default function Loading() {
  return (
    <>
        <div className="loading" style={{
            marginTop: "10rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0.8rem 1.1rem",
            width: "60rem",
            textAlign: "left",
            backgroundColor: "lightblue"
        }}>
            <p style={{
                color: "white",
            }}>Loading, please wait...</p>
        </div>
    </>
  )
}
