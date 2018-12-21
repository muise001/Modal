
export const config = {
  mode: "cors",
  headers: {
    Authorization: "JWT " + token
  }
}

export function handleFetchError(resp){
    // Check of er een fout is
    console.log(resp);
    if (resp.status < 200 || resp.status >= 400) {
      // foutafhandeling
      if (resp.status === 401) {
          this.setState({ error: "Invalid Token, try again later" });
          return;
      }
        // onbekende fout
        this.setState({ error: `error ${resp.status}` });
        return;
    } if (resp.status === 204) {
      console.log('false');
        this.setState({ error: `no results` });
        return;
    }
  return resp
}

export function handleJson(resp){
  return resp.json()
}

//
//   const q = queryBuilder(showMore, queries, data)
//   console.log(q);
//   const token = TOKEN;
//
//   fetch(`${baseUrl}/organizations/${id}/eb/videos${q}`, {
//     mode: "cors",
//     headers: {
//       Authorization: "JWT " + token
//     }
//   })
//     .then(handleErros)
//     .then(handleJson)
//     .then(({ data }) => this.setState({ data }))
//     .catch(error => { error: "No internet connection" })
//
//   .then(resp => {
//     // Check of er een fout is
//     if (resp.status < 200 || resp.status >= 400) {
//       // foutafhandeling
//       if (resp.status === 401) {
//           return ({ error: "Invalid Token, try again later" });
//       }
//         // onbekende fout
//         return ({ error: `error ${resp.status}` });
//     } if (resp.status === 204) {
//         return ({ error: `no results` });
//     }
//     resp.json()
//       .then(json => {
//         console.log(json.data);
//         return showMore ? ({data : [...this.state.data, ...json.data]}) : ({data : json.data})
//         // this.setState({isLoading: false})
//       })
//   })
//   .catch(error => {
//       return { error: `No internet connection` };
//     });
// }
