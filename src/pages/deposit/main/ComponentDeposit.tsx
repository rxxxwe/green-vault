import { useState } from "react";
import s from "./ComponentDeposit.module.scss";
type Props = {};

export const ComponentDeposit = (props: Props) => {
  const [isOpenEmail, setIsOpenEmail] = useState(false);
  const [isOpenWallet, setIsOpenWallet] = useState(false);

  const toggleEmailDropdown = () => {
    setIsOpenEmail(!isOpenEmail);
    setIsOpenWallet(false);
  };

  const toggleWalletDropdown = () => {
    setIsOpenWallet(!isOpenWallet);
    setIsOpenEmail(false);
  };

  return (
    <div>
      <div className={s.ref}>
        <div className={s.ref_item} onClick={toggleEmailDropdown}>
          antonzhdanovich@gmail.com
          <div
            className={`${s.dropdown} ${isOpenEmail ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() =>
                navigator.clipboard.writeText("antonzhdanovich@gmail.com")
              }
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>

        <div className={s.ref_item} onClick={toggleWalletDropdown}>
          QUBqS-7t...kG-3U8
          <div
            className={`${s.dropdown} ${isOpenWallet ? s.dropdown_active : ""}`}
          >
            <div
              className={s.dropdown_item}
              onClick={() => navigator.clipboard.writeText("QUBqS-7t...kG-3U8")}
            >
              Copy Wallet
            </div>
            <div className={s.dropdown_item}>Disconnect</div>
          </div>
        </div>
      </div>

      <div className={s.container_overview}>
        <div className={s.left_container}>
          <div className={s.header_left_container}>
            Supply Funds for ThriveHarvest
          </div>
          <div className={s.green_block}>
            <div className={s.column_deposit}>
              <div className={s.dep}>Your deposit</div>
              <div className={s.balance}>
                Balance: 12.356
                <button className={s.btn_max}>max</button>
              </div>
            </div>
            <div className={s.quantity_crypt}>
              <div className={s.quantity}>11.213</div>
              <div className={s.crypt}>ETH</div>
            </div>
          </div>

          <div className={s.operation}>
            <div className={s.header_operation}>Operation details</div>
            <div className={s.container_operation}>
              <div className={s.operation_percent}>
                <ul>
                  <li>
                    Beefy protocol
                    <br /> 82%
                  </li>
                  <li>
                    Insurance fund (USDT)
                    <br /> 15%
                  </li>
                  <li>
                    GreenVault comission
                    <br /> 2%
                  </li>
                  <li>
                    Network commission
                    <br /> 1%
                  </li>
                </ul>
              </div>
              <div className={s.operation_crypt}>
                <ul>
                  <li>
                    <b>9.195</b> ETH
                  </li>
                  <li>
                    <b>1.682</b> ETH
                  </li>
                  <li>
                    <b>0.224</b> ETH
                  </li>
                  <li>
                    <b>0.112</b> ETH
                  </li>
                </ul>
              </div>
            </div>
            <div className={s.more_info}>
              <div className={s.info}>
                Before investing, carefully consider all risks because by
                clicking the
                <br /> button below you agree that only you are responsible for
                all financial
                <br /> losses incurred
              </div>
            </div>
          </div>

          <button className={s.pay}> Supply 11.213 TON</button>
        </div>

        <div className={s.right_container}>
          <div className={s.header_left_container}>
            Supply Funds for ThriveHarvest
          </div>
          <div className={s.column_deposit}>
            <div className={s.dep}>Your deposit</div>
            <div className={s.balance}>Balance:12.356 max</div>
          </div>
          <div className={s.quantity_crypt}>
            <div className={s.quantity}>11.213</div>
            <div className={s.crypt}>ETH</div>
          </div>

          <div className={s.operation}>
            <div className={s.header_opertion}>Operation details</div>
            <div className={s.container_opertion}>
              <div className={s.operation_percent}>
                <ul>
                  <li>
                    Beefy protocol
                    <br /> 82%
                  </li>
                  <li>
                    Insurance fund (USDT)
                    <br /> 15%
                  </li>
                  <li>
                    GreenVault comission
                    <br /> 2%
                  </li>
                  <li>
                    Network commission
                    <br /> 1%
                  </li>
                </ul>
              </div>
              <div className={s.operation_crypt}>
                <ul>
                  <li>
                    <b>9.195</b> ETH
                  </li>
                  <li>
                    <b>1.682</b> ETH
                  </li>
                  <li>
                    <b>0.224</b> ETH
                  </li>
                  <li>
                    <b>0.112</b> ETH
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={s.more_info}>
            <div className={s.info}>
              Before investing, carefully consider all risks because by clicking
              the
              <br /> button below you agree that only you are responsible for
              all financial
              <br /> losses incurred
            </div>
          </div>
          <div className={s.pay_crypt}>
            <button className={s.pay}> Supply 11.213 TON</button>
          </div>
        </div>
      </div>
    </div>
  );
};
