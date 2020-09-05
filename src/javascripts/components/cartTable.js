const cartTable = (array) => `<div>
  <table class="table table-hover table-striped table-dark">
    <thead>
      <tr>
        <th scope="col">Title</th>
        <th scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
      ${array.map((item) => `<tr> <td>${item.title}</td> <td>$${item.price.toFixed(2)}</td> </tr>`).join('')}
    </tbody>
  </table>
</div>`;

export default { cartTable };
