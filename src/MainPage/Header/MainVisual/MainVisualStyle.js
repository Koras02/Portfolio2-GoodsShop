import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom'

export const FormHeaderWrapper = styled.div`
  width:100%;
  height:1200px;
  min-height:1200px;
  overflow:hidden;
`;

export const FormHeaderBoard = styled.div`
  width:100%;
  height:200px;
  border-bottom:1px solid gray;
`;

export const FormHeaderBoardH1 = styled.div`
  text-align:center;
  font:bold 28px/24px arial;
  margin:60px auto;
  display:block;
`;

export const FormCategory = styled.div`
  width:100%;
  height:1000px;
  margin:auto;
`

export const ImgWrapper = styled.div`
min-width:50%;
max-width:100%;
height:600px;
min-height:500px;
margin:auto;
 
`;


export const FormHeaderH1 = styled.div`
  font:bold 36px/24px arial;
  color:red; 
  margin-top:40px;
  position:absolute;
  left:48%;
`;


 
export const FormHeaderH2 = styled.div`
font:bold 19px/24px arial;
position:absolute;
left:0%;
bottom:10%;
`;

export const ImgForm = styled.div`
  width:100%;
  height:400px;
  position:relative;
  left:0%;
  top:20%;
`
export const ImgWrapper2 = styled(LinkR)`
  margin:auto;
  height:1200px;
  color:#000;
  text-decoration:none;
  margin-left:0px;
  `;
  
export const Img = styled.img`
max-width:20%;
min-width:20%;
max-height:600px;
min-height:500px;
object-fit:cover;
margin:1%; 
position:relative;
display:inline;
overflow:hidden;
left:10%;
opacity:70%;
clear:both;

@media screen and (max-width:1600px) {
  margin:20px;
  width:20%;
}

@media screen and (max-width:1200px) {
  margin:25px;
  width:30%;
}

@media screen and (max-width:960px) {
  margin:12px;
  width:75%;
  height:100px;
}

 

&:nth-child(1):hover {
  opacity:100%;
  width:20%;
  background-image:url('data:image/jpeg;base64,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')
}
&:nth-child(2):hover {
    opacity:100%;
    width:20%;
    background-image:url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAREhURERAWFRIWFRoYGBYYGBwYGBcVGhYWGBkZFhgYHSggHBooHhgWIjEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGzMlHyAvLS0tLS0vMi0tLTctLS0uLi0tLS0tLSstLjctLS0tLys1LS8tLS01LS0tLS0tLS8tLf/AABEIAMABBgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUG/8QAPxAAAQMDAgMGBAMFBwQDAAAAAQACEQMhMQQSQVFhEyIycYHwBRSRoSNS0RVTscHhM0JDYoKS8SVjcqIGJET/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAC0RAQEAAQIEBQIFBQAAAAAAAAABEQIxEiFB8FFhobHRIpETgcHh8QMycZLi/9oADAMBAAIRAxEAPwD474frNUxzK1MNPY0ywHswQGQAd3USL9et/LqVqjmM04G4McS0Nb3iXXOLnjb9F6bdeBSazbLmte0EzA7QncbOv3TEEZvPBYtPo3PeC2oGEugEu2wYzIvHX0V/C0S5xz/n5qa9V144ueP4Zv2fXkDsKsnA7N0mLGLXyFVW072RvY5s43NLZ4WkL3/2VqBjWs9K5/Xp/BQq/Aaj/Fq6LiLd6qTF+EjqtI+fRbdT8P2OLC8EgxLbtPkeKr+W6q4GZW6bTvqO2sbLjwsP4qz5bqu0abg8Bjy0m0g7fuE5TcvkpFB8TtJF7gEi2bhcdTcLlpA6ghenp9HqBLadTutO2zwBMTaT14cV2v8ADNSWkufuY0z4w4TfAnOepv1UyPIJWvWfDK9HaKlItL27mixltr90nmM81bX+EVGeItzHiBzbzhTaK7zTPbuLiNrSXnuiAYkmwsMcoWbxcUxt1/TC8mH5Wpb8N18d0o7TVBmm7n4Ti36heqNDqj/jXmI7WT9ZjIxM2wg0Oqx23DHag2I844/ZaR472EGCCD1V+m+H1qjKlVlMup0xL3SAGiCeJk2BxOFp1Hw2sQaj3NdGe+CYAmwnHKFlp1Xta5jajgx3iaCQHZHeGDk/UrOvix9O/n6+izHVX8u/8jvoeOFAhavm6v7131PX9fcKhzSTJMk3J5laRGmwuMDJx5rQPh9WSBTeSDBhpMEiQDHGFGhtaZO48odtg/QrfQ+K1KYIZUrMkydtXbJgC8MvYBOeRjqfDazZLqVQBuSWOgAAkyYtYH6JV+HVW+Km8AGJLSBJxeIXo/t+vtLO31G05BrTblJZMcxg2nAVWp+LVKlqlSu4Hga0ixBFtkCCBHKAhl5zdM8vbTDSXucGBuCXEhoF8GSBdT1GgrU3upvpuD2kBzR3oJAIu2RghdqVO8HsL2uB3BxdJDgQQQQAQQRModTVkntXy65O4ySBAm98BZ+ri8vXPwvLCemfWY2G05BOSyTgYPoMc1bV+IVo71No7wJJpwdwhwB5cDH8lQdVVz2r8R4jj6qFSrUcIdUcRMwTN4gLSJP1dSo5ohskwBtblxA4jyur3a2vO3aJaYMMBu0jiBwgeyslIuY4Oa4hwwRkKz5mrJPavBcZJBIk8zCn1Z8la26rUyQKQmI/s/QHzv8A8wqamprkEGnAcCLU4nnwzBCq+Zq/vX/7j+q781V/evzOTm/6qoo7B/5HfQqtazqque1fPmftyWfs0EEU+zXUHotDYkxN+c4tEdea8+u47jf3C3dmY3cL+kRn6rBXHePvgFqjeKe2jSqO07yw1INS4bUgvmm10xNiMSNpyrD8tYijqC0DvXGbcRiwd9fQTDh8tpx84QRVM0toIoN3VfxLd5x/vbYvvU6jqgv8+wkMcbGTNu5jJv8AQenn0/1LrznpbOs2vfPbwass2YarG3ilWBJOyegFja5kHCxnd1vjK3VNdWaBGoLug4WGZHuFnfrqxIJeZExwiTJxzK6TLHNHTvHe3Mc7umIcRtP5jGQOSiwqyk/duLqmw7DHd8Z/IdvPmVUxaiplvFXEMDWyy5EhwcfzOFxHQiyqcLC3O/NToCXAbQ7oTE4sDzVqyZT7Wl+54n++cTIGOVl0VaMmaRiMb+N+nl9FodpzYDTwZE9+ZF7dJg36KFINYNtSiHGQJ37YmfFE/wBIWeJrVounv5Z2Pp8ac/6o5Zt0P16KRq0p/sudtx5iP5rYKADiDpZksAAqGAXMJEETIOekKFZ9FsA6fvCzvxDEhowRaZueWFOPy9vlzyxVnNMbW7fWb/RVrTVrUyIbS25k7i4nlnFxfnJwsy1FERFQREQEREBERAREQEREBERAREQEREH0P/xv487R1e0FJtTuubtdbxbbze/dAxgkcV4lfU/iF20eLdtju3MxH5eEclsY5myDEwfObxw8vvzXm12GSY9wrU4ZnPWvXFGp2NGuaDDTqViGgOG5x3PBbtyGy1wn/KFex7pj9nsixiY5iNzjbjY8h6+UAzsqY7R+4PJc3vQ1vAtExIMm1+/0VuyhEdrWg9BHS03wOPLzHn0zVc58b0s6/wCfXquq4/t+W9znCf8Ap7RLrAk27sRmeE3z5ryK267uzLWknyFyIHkbei1AULfi1xzx14/8z62rGmoRerUOcNtE2yeXnxXScmeK9fZVpax78Uw7uGdwnaOLm3yFRulSFAXncbGIEd7hM8PJQa0jK00m4WBjnfmrNMyXAbd0xaYnGDOVW7Atzvz9FwqrLivQbpDx0x5eOLyc++CgdI6QOw4i265sSRPX7LtGhIBNEu6tfbLvP2CoN0zneGjgt4mDIwb3nphYz33Xe6czbv8A1dfRb4exLXEtE75uWmJb1MH6rG4RbktjQyAHUgHTkP2thouLkicTeZVtTT8qBl4G075AhsuIg3Jmbn0NwnH4vPyjzUV9XSPaNxbDZIEkSdsTabxIuLKhalyCIioIiICIiAiIgIiICIiAiIgIiICIiD0W6cxuJgRyVOn19Sm8bHBpDgQTFjGTINlLtDEcPIfxysT/AB3EjlzEK0fSH4jrvl6ep+Yo7DUDQ38Pex43bSWbLDuEz5Kk/G9aACKzOAgCmYERgNiI4jgF51IUOyph2lqGp2gmoCYeyXSwN/NgW/Ku6irpg0t+Ve15bZznmQZMGIEjhw8I6hY26572TTcvSPxvWkz29Oef4fGT+XH9F42r1D95L4LnEuJBySZOLLEiqr/mTyQvm6pa0nAJgSeg5nop08K5FrhYGOd+aNYTMCYEnykD+YXagECBFvrhdov2mTMWmCQcg2jjZFiynVpxdjp6OIHHn6fdcbUp8Wu4f3uQv7n9FdToN/dPItEGZueXD+YOFX2bQ5ssMbmzcSQcgmbE8MWWeTreKTPL7fs4alKPAZjnaY88TBUWVmgmQYi1zIO2LXxPObBSGhq57N0GIMWvi/JQbpKhE7HRzi2J/hdOXi5XVlYa1ODDCXEAAlxgGIcYBuTfpi3BZVe/SVGiSxwHOPL9Quu0VUTNN1pm2IAJn0I+qSydUZ0XXNgkcjHP7jK4tAiIgIiICIiAiIgIiICIiAiIgIiIPap/EAKXZwZ2kT5kn+f2C8Ss4hxIMHmPJemyiC2ePP6+7/pPl6jxH3wCUbqGocKZYNW5jaZD6bO9DngE92MOk5SpSpvMv1cmMua4nyKn8K09Z1HUvphmxjB2hcYMFtQjYOJhrvoFrOnrbGzoKf8Ahw6Dedu2e9N+6DPHdOSuerXo207zf39l4bfL9XgPABIBkTnn1XFq+IVZdtNJlNzJa4NEd4G83N1lW4J0znvEWPr0PRdp4V2ia89ptY134bt26O63i5snxKmnhJuLqvDOOPkPf0UCp1eGccfIYXA0mYGBJ6Cwn7hVGykywhlXrtJLTcxEfrzVRZJAaxx8JAJ8QAvg3PARzIylOrTAv2g6NdbjifT1lVmo2xAdYgiT6nGL4hZdddnDybxTAF6epBgTwb4TORjl0UKdK39nqJuehBaSDjjnqPqoCvRiCa+Bbc3biCBbHDyUWahgA71aRiHCMECOX6SFzxXBfXAkDZqNxIMOOQAwuEZkD6d1dqbW+NtcNkzuO0z3YiSOd7TcLPWrUjdrq0g5LhYHbujiOP2XX1qJGa096JcCIIjlnnwKYoyVXTzxj8vQSTYKC64iTAgTjl0XF2aEREBERAREQEREBERAREQEREBERBqWPUeI++AWxY9R4j74BWjRo2tNOtJeHbRt2hxGSTv22iBHe5lXzpA0RU1AcC2Ww0AG+6L2PjI/8hmCu/C9OXUdS4V20w1glhEuqy2p3Wnhgj/UF6DNRqdpjXaaLWLqUkR1ZkW+65abptsl59fLl0/JefV5dQaOHbH1p2ujc1l3yNnhNhmfO2L+evS+KamsAKT6jHN2tdDQzu2IDSWiQRe08l5q2Csp4Vasp4RF1XA8Xr5DHvkpUKm10kuAtO0wcg2+gUauB4scfTHRS07A4kEHAiBJBlt4HSVasXCgz8lWLYA6zfHIei6KDP3dX6AcP4qlvaiAN45Abvt6n7oe1Od+QRnNyCOuVl1zPBYKAMFrKjmyJIE2jv4FjOPVVPoPmAx15gbTcZt6JT7Vnh3tkjEiTeMdCfqu/NVQZ7R+4cdx8jx5WTm5XOVdSk5viaRPMRy5+Y+qgp1KjnGXOJMRJMmAoLUQREQEREBERAREQEREBERAREQEREBERBqWPUeI++AWxY9R4j74BWjb8N07nUtQ4abtAxgJqTHY+I7oJvIa7/atIZSLbfD6u+ch7w2Im3dyYNoxxVPwt9MUdQH6h9NxaNlNvhqnbUs+2BIHDxlSZWmP+oVBb/u90Z2i/MC2LLz6LePXnxnj4T8vt75a1WSRHW6Iuax1LR1adzM7ng42xI8+AyM5WKpoqrZ3UniJmWkWEAnyEj6rfU1GY19XFge14CACRw9LSs+s1tWXNGpqVGkQSXOuDlp3G4uQeBXWViXLCrKeFymGmdxixi0yeA/qu08Kqvq8PFjj5DHvkoseWkOGRBHmu1eGfXyGFBUetp9Y4gQamRIa0EBxJgYyf1XBqDG4CptB8WwQIDpvESPPmsmgs7dNRsEd9nDofOOfA2PC+nUbcOqVQ0FhA2zwLpcOhmPXOVztsrf4lUPrNL5l3ibJsLAZgYI4ZWVxkkrRqKLR4A8gRdwyNskxFgIPE/ZU9k6J2mOcHkT/AABPkCtys255oIiKoIiICIiAiIgIiICIiAiIgIiICIiAiIg1LNVpySZ9wtKyV3Hcb+4Vo3UdLULacMY4GpAHFxk9118WP25L2amn1J3f/QoZG0FoOxtzjdyAE2x5R4jK1AU6Zc2pvFQl5mGuZeQ2+Y2cuN8K1tfQ5ayuIvILZbYQQd2d156xbKxdN07d5Xi4t1+s+Eamp/8AmYwssQwBuQHAul0G3LqvIfpy0kHIJB8xYrc+roy6duoDZBDZabcSSTcm1xGF5gceaTPUaKGic/dBHdaXGTFhynJ6KAbCrBJ5qbCqLapxc44iOAx74KBVlbhc45RFhhVqo0Fzqbg6m4gwLwQQbSLgTf7QjdVVG4bj3o3AiZAECZHL6q3R1yBBqPa1pHeAkNuZkRc5i4Uvmi2zKziNpM7Y7wBgYNuErF32a+jz+37qX6usQZc4g2PK4i/oq6td5G1xMQIB5ADb9oWt3ZkjfXeCRxpz4m3i/KB6qlzKRcQ6s6AAAezvIbEETaIAlJZ4ejNx0ZEWsUqET2zv9nQdbXkLPUbBtg3HkccBPmLLUuRBERUEREBERAREQEREBERAREQEREBERBqWPUeI++AWxY9R4j74BWiynrHt2QR+G7c2wsSQTPEi2CtH7b1Oe1/9Wfbu2XnosWS7rOWy/V6upVIdUduIEAwBaSYsBzKoRFdhZRrvZu2uI3NLXdWnISnhVqynhBdVi15tyiLBQV7oIPeJ2tmIiLtH8/srdNSoOpv3Pe2sCzYIHZlpMOLjEgi39VLqwRHRVNjrvdTMgh0SBeZLYucEKepryZ7Yv7hElkRbwgcuErG9xNz0H0ED7BcTh55Zw9Wjqg0ADVuFhimbQyIPE/l+6qZqpcCdS4bG9x2yTdkOEA2wBN+a8+F0UzBMGBk8p5qcE7x8GHqjWnPzbpE/4d7tb9MR6LzK1QuJJMySZMTfmffHmoQkK6dMiyOIuwkLQ4i7CQg4i7CQg4i7CQg4i7CQg4i7CQg4i7CQg4i7CQg4i7CINKx6jxH3wC2LHqPEffAK0VoiLIIiICsp4Vasp4Qa90td3p7g4RHeZ79FXSquaZaYIVhf3Xd6e6OER3mW64+ypDSZgEwJPQdVJve+kJyb6esNvxwL4LMX4kW5eh6KNTXOGK8/6IwDa/HySjXsPxgI4OZJycm8/XBXG6gkyazZAEEsByL8PRZx33Hp4rjf1/6dbrJB/FLSYmWC4ggwW4j7yMI6qwNe3tg7cGf3CCSAeJgAAmJvIld+acTes0YvsF+6eEeiMq7bDUC8/wCHN4PMccSnffJi6c76vb5YC6OI81I1HHr6K/5kgyKhvIJ2CY2gCxODjPAqRjI1BBIM2IMAAtBIsSTb0m61ly1YmzN2x5oazitdev3Xjtg7c93dFMDcCWneSRadotfwj0yVq7n3cZMkz539BMmOpSW1B1YlBWcOKrRaFpru5rnbO5qtEFvzDvYUC5RRBLcm5RRBLcm5RRBLcm5RRBLcm5RRBLciiiDUseo8R98Atix6jxH3wCtFaIiyCIiArKeFWrKeEF9YzHem3LFgp06uwGCDvYQf8veI/g0H1VL3k59+4UVQREQEREBERAREQEREBERAREQEREBERAREQEREBERBqWPUeI++AWxY9R4j74BWitERZBERAVlPCrVlPCCSIioIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=')
}
&:nth-child(3):hover {
    opacity:100%;
    width:20%;
    background-image:url('data:image/jpeg;base64,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')
}
&:nth-child(4):hover {
    opacity:100%;
    width:20%;
    background-image:url('data:image/jpeg;base64,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')
}
 
`;
 

export const ImgDescription = styled.div`
  width:100%;  
  text-align:center;
`
 
export const ImgDescriptionH1 = styled(LinkR)`
 display:inline-flex;
 text-align:center;
 margin-left:9%;
 margin-right:9%;
 font:bold 24px/24px arial;
 text-decoration:none;
 color:#000;

 &:hover{ 
   color:red;
   transition:5s;
 }

 @media screen and (max-width:1600px) {
    margin:0px 10% 0px 5%;
    position:relative;
    left:3%;
 }
 @media screen and (max-width:1400px) {
   margin:0px 14% 0px 4%;
   position:relative;
   left:10%;
 }
 @media screen and (max-width:1200px) {
   margin:0px 14% 0px 3%;
 }

 @media screen and (max-width:1024px) {
   margin:0px 14% 0px 2%;
 }

 @media screen and (max-width:960px) {
   margin:0px 12% 0px 1%;
 }
`;
 


 
