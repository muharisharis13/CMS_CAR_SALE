import React, { useState } from "react";
import * as Components from "../../components";
import styles from "../../styles/library.item-library.detail.module.css";
import { useRouter } from "next/router";

export default function UserCreate() {
  const router = useRouter();
  return (
    <div>
      <Components.pageTitle
        titleName={`User`}
        breadcrumbItem={["User"]}
        breadcrumbItemActive="Create User"
      />

      <section className="section">
        <div className="card">
     <form>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label>Avatar</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label for="basicInput">Fullname</label>
                            <input type="text" className="form-control" placeholder="Fullname" />
                        </div>                     
                        <div className="form-group">
                            <label for="basicInput">Username</label>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>                     
                        <div className="form-group">
                            <label for="helperText">Password</label>
                            <input type="password" className="form-control" placeholder="Password"/>
                            <p><small className="text-muted">Minimal 8 karakter dan usahakan kombinasi.</small></p>
                        </div>
                         <button
                    className="btn btn-primary pull-right"
                >Submit</button>
                    </div>
                </div>
            </div>
             
                  </form>
        </div>
    </section>

     </div>
  );
}
