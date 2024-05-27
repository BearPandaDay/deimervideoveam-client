export default class FacturaprestamoClass {

  async getFacturaprestamo(sn, status) {
    try {
      const filter = {
        sn: '',
        status: ''
      };

      if (sn) filter.sn = sn;
      if (status) filter.status = status;
      
      const url = `http://localhost:3977/api/v1/facturaprestamo?sn=${filter.sn}&status=${filter.status}`;

      const params = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${accessToken}`,
        },
        // body: JSON.stringify(form),
      };

      const response = await fetch(url, params);
      const result = await response.json();

      // if (!result.status) return result.status;
      return result;

    } catch (error) {
      // console.log("Error en solicitud API Frontend");
      console.log();
      // console.log("🚀 ~ GetData ~ getVideobeams ~ error:", error)
    }
  }
}