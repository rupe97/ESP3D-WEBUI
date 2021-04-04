/*
 progressModal.js - ESP3D WebUI component file

 Copyright (c) 2021 Alexandre Aussourd. All rights reserved.
 
 This code is free software; you can redistribute it and/or
 modify it under the terms of the GNU Lesser General Public
 License as published by the Free Software Foundation; either
 version 2.1 of the License, or (at your option) any later version.
 This code is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 Lesser General Public License for more details.
 You should have received a copy of the GNU Lesser General Public
 License along with This code; if not, write to the Free Software
 Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/
import { h } from "preact";
import { Info } from "preact-feather";

const progressModal = ({ modals, title, button1, content }) => {
  const defaultCb1 = () => {
    modals.removeModal(modals.getModalIndex("confirmation"));
    if (button1 && button1.cb) button1.cb();
  };

  modals.addModal({
    id: "progression",
    title: (
      <div
        class="text-primary feather-icon-container"
        style="line-height:24px!important"
      >
        <Info />
        <label>{title}</label>
      </div>
    ),
    content: content,
    footer: (
      <button class="btn mx-2" onClick={defaultCb1}>
        {button1.text}
      </button>
    ),
    //overlay: true,
    hideclose: true,
  });
};

export { progressModal };
